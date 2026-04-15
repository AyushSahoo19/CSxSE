# [ > ] CSxSE Dictionary

A premium, curated dictionary and curriculum for Computer Science and Software Engineering. Built with Astro 6, this platform provides a structured, phase-based mastery path for engineers at all levels.

## 🚀 Features

- **Mastery Sequence**: A pedagogical path from fundamentals to expert-level architecture.
- **380+ Terms**: Deeply explained concepts with real-world examples.
- **Curriculum Phases**: 6 progressive phases to guide your learning journey.
- **Resource Hub**: Hand-picked YouTube channels and courses for further study.
- **Minimalist Design**: A high-performance, dark-themed editorial UI.

## 📁 Project Structure

```text
/
├── public/          # Static assets (logos, icons)
├── src/
│   ├── content/     # Markdown definitions (The Dictionary)
│   ├── layouts/     # Base UI layouts
│   ├── pages/       # Application routing (Phases, Domains, etc.)
│   └── styles/      # Global Design System
├── scripts/         # Maintenance & automation tools
├── package.json     # Dependencies & Scripts
└── astro.config.mjs # Framework configuration
```

##  Genie Commands

All commands are run from the root of the project:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally                   |

## 🛠 Maintenance

The `scripts/` directory contains tools to manage your dictionary:

- `add_missing_terms.js`: Batch add new terms to the collection.
- `check_cats.js`: Validate category taxonomy across all files.

---
*Built with passion for the engineering community.*
