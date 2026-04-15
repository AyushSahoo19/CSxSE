// Extracts the `dictionary` array from cs-se-dictionary.jsx and emits
// one Markdown file per term into src/content/dictionary/.
// Also emits src/data/categories.json with category + icon metadata.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const srcJsx = path.join(root, "cs-se-dictionary.jsx");
const outDir = path.join(root, "src", "content", "dictionary");
const dataDir = path.join(root, "src", "data");

const raw = fs.readFileSync(srcJsx, "utf8");

// ── Extract CATEGORIES array ────────────────────────────────────────────
const categoriesMatch = raw.match(/const CATEGORIES = \[([\s\S]*?)\];/);
const CATEGORIES = [...categoriesMatch[1].matchAll(/"([^"]+)"/g)].map(
  (m) => m[1],
);

// ── Extract CATEGORY_ICONS map ──────────────────────────────────────────
const iconsMatch = raw.match(/const CATEGORY_ICONS = \{([\s\S]*?)\};/);
const CATEGORY_ICONS = {};
for (const m of iconsMatch[1].matchAll(/(?:"([^"]+)"|(\w+)):\s*"([^"]+)"/g)) {
  const key = m[1] ?? m[2];
  CATEGORY_ICONS[key] = m[3];
}

// ── Extract LEVELS ──────────────────────────────────────────────────────
const LEVELS = ["Foundational", "Intermediate", "Advanced", "Expert"];

// ── Extract dictionary entries ──────────────────────────────────────────
// Match the dictionary array body by slicing between the specific `const dictionary = [` and next `];`
const dictStart = raw.indexOf("const dictionary = [");
const dictEndRel = raw.indexOf("\n];", dictStart);
const dictBody = raw.slice(dictStart, dictEndRel);

// Each entry looks like: { term: "...", category: "...", level: "...", definition: "...", example: "..." }
// Use a forgiving regex that captures double-quoted strings (with escaped quotes).
const entryRe =
  /\{\s*term:\s*"((?:[^"\\]|\\.)*)"\s*,\s*category:\s*"((?:[^"\\]|\\.)*)"\s*,\s*level:\s*"((?:[^"\\]|\\.)*)"\s*,\s*definition:\s*"((?:[^"\\]|\\.)*)"\s*,\s*example:\s*"((?:[^"\\]|\\.)*)"\s*\}/g;

const entries = [];
for (const m of dictBody.matchAll(entryRe)) {
  const [, term, category, level, definition, example] = m;
  entries.push({
    term: unescape(term),
    category: unescape(category),
    level: unescape(level),
    definition: unescape(definition),
    example: unescape(example),
  });
}

function unescape(s) {
  return s
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, "\\")
    .replace(/\\n/g, "\n");
}

// ── Slugify ────────────────────────────────────────────────────────────
function slugify(s) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\+/g, "plus")
    .replace(/\//g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ── Emit markdown files ────────────────────────────────────────────────
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(dataDir, { recursive: true });

const seen = new Map();
for (const e of entries) {
  let slug = slugify(e.term);
  const count = seen.get(slug) ?? 0;
  seen.set(slug, count + 1);
  if (count > 0) slug = `${slug}-${count + 1}`;

  const fm = [
    "---",
    `term: ${JSON.stringify(e.term)}`,
    `slug: ${JSON.stringify(slug)}`,
    `category: ${JSON.stringify(e.category)}`,
    `level: ${JSON.stringify(e.level)}`,
    `definition: ${JSON.stringify(e.definition)}`,
    `example: ${JSON.stringify(e.example)}`,
    "---",
    "",
  ].join("\n");

  fs.writeFileSync(path.join(outDir, `${slug}.md`), fm, "utf8");
}

// ── Emit category metadata ─────────────────────────────────────────────
const categoryCounts = {};
for (const e of entries)
  categoryCounts[e.category] = (categoryCounts[e.category] ?? 0) + 1;

const categoryData = CATEGORIES.map((name) => ({
  name,
  slug: slugify(name),
  icon: CATEGORY_ICONS[name] ?? "•",
  count: categoryCounts[name] ?? 0,
}));

fs.writeFileSync(
  path.join(dataDir, "categories.json"),
  JSON.stringify(categoryData, null, 2),
  "utf8",
);

fs.writeFileSync(
  path.join(dataDir, "levels.json"),
  JSON.stringify(LEVELS, null, 2),
  "utf8",
);

console.log(
  `Wrote ${entries.length} terms across ${CATEGORIES.length} categories.`,
);
