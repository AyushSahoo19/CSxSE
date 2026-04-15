import fs from 'fs';
import path from 'path';

const CATEGORIES = [
  "Fundamentals",
  "Data Structures",
  "Algorithms",
  "OOP & Design Patterns",
  "System Design & Architecture",
  "Databases & Storage",
  "Networking & Web",
  "Operating Systems",
  "DevOps & Infrastructure",
  "Software Engineering Process",
  "Programming Languages & Paradigms",
  "Security",
  "Testing & QA",
  "Frontend Engineering",
  "Backend Engineering",
  "Distributed Systems",
  "Cloud & Scalability",
  "AI / ML Foundations",
  "Math & Theory",
  "Career & Professional",
];

const files = fs.readdirSync('src/content/dictionary').filter(f => f.endsWith('.md'));
const cats = new Set();
files.forEach(f => {
  const content = fs.readFileSync(path.join('src/content/dictionary', f), 'utf-8');
  const match = content.match(/category:\s*["']?([^"'\n]+)["']?/);
  if (match) {
    cats.add(match[1]);
  }
});

const missing = CATEGORIES.filter(c => !cats.has(c));
console.log('Missing categories:', missing);
console.log('Total files processed:', files.length);
