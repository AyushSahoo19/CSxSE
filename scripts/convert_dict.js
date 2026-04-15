import fs from 'fs';
import path from 'path';

const jsxContent = fs.readFileSync(path.join(process.cwd(), 'cs-se-dictionary.jsx'), 'utf-8');

// Find the start and end of the dictionary array
const startStr = "const dictionary = [";
const endStr = "// ═══════════════════════════════════════════\n  // SECURITY"; // Wait, better to find the last object.

// Actually, let's use a simpler approach: extract everything between `const dictionary = [` and `];`
let dictPart = jsxContent.substring(jsxContent.indexOf(startStr) + startStr.length - 1);
// Find the closing bracket correctly
let bracketCount = 0;
let endIndex = -1;
for (let i = 0; i < dictPart.length; i++) {
  if (dictPart[i] === '[') bracketCount++;
  else if (dictPart[i] === ']') {
    bracketCount--;
    if (bracketCount === 0) {
      endIndex = i + 1;
      break;
    }
  }
}
dictPart = dictPart.substring(0, endIndex);

// Now we have a string representing a valid JS array. Let's eval it!
// To safely eval, we just wrap it since it's pure data
let dictionaryData;
try {
  dictionaryData = eval(`(${dictPart})`);
} catch (e) {
  console.error("Eval failed", e);
  process.exit(1);
}

// Ensure the directory exists
const contentDir = path.join(process.cwd(), 'src', 'content', 'dictionary');
fs.mkdirSync(contentDir, { recursive: true });

// Convert each to a markdown file
dictionaryData.forEach(item => {
  if (!item.term) return;
  // Slugify the term
  const slug = item.term
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  
  const frontmatter = `---
term: "${item.term.replace(/"/g, '\\"')}"
category: "${item.category.replace(/"/g, '\\"')}"
level: "${item.level.replace(/"/g, '\\"')}"
---

${item.definition}

### Example

${item.example}
`;
  
  fs.writeFileSync(path.join(contentDir, `${slug}.md`), frontmatter);
});

console.log(`Converted \${dictionaryData.length} items to Markdown in src/content/dictionary.`);
