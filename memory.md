# Project Memory: CSxSE Dictionary

This file serves as the permanent context for the CSxSE Dictionary project. It documents the architecture, design philosphy, and technical state of the platform.

## 🎯 Vision & Persona
- **Goal**: A premium, mastery-based educational platform for Computer Science and Software Engineering.
- **Audience**: Self-taught developers and student engineers seeking a structured curriculum over a random collection of terms.
- **Design Persona**: "Senior Software Architect" — Minimalist, authoritative, high-density, no fluff.
- **Methodology**: **Bloom’s Taxonomy**. Concepts are ranked from Foundational to Expert and sorted into a logical 24-phase pedagogical sequence.

## 🏗️ Architecture & Technology Stack
- **Framework**: [Astro](https://astro.build/) (v6.1.6).
- **Content Persistence**: Markdown files stored in `src/content/dictionary/`.
- **Typing**: TypeScript for data models.
- **Styling**: Vanilla CSS with project-wide variables (`src/styles/global.css`).
- **Data Management**:
    - **Source of Truth**: The `MASTERY_SEQUENCE` constant (defined in index pages) controls the exact ordering of every category across the site.
    - **UI Data**: Modular data files in `src/data/` (e.g., `stacks.ts`, `lifecycle.ts`) manage complex landing page components.

## 📂 File Structure
```text
/
├── public/                 # Static assets (Favicons, banners)
├── scripts/                # Maintenance and content generation utilities
├── src/
│   ├── components/         # Reusable UI components
│   ├── content/
│   │   └── dictionary/     # 400+ MD term files (The Core Knowledge)
│   ├── data/               # Business logic constants (Stacks, Lifecycle)
│   ├── layouts/            # Global Layout.astro
│   ├── pages/
│   │   ├── categories/     # Domain index and detail pages
│   │   ├── dictionary/     # Full alphabetical/mastery index
│   │   ├── phases/         # Dynamic Phase 1-6 curriculum pages
│   │   ├── stacks/         # Architectural blueprint detail pages
│   │   ├── index.astro     # The Curriculum Landing Page
│   │   └── lifecycle.astro # The Engineering Process Handbook
│   └── styles/             # Global CSS and tokens
└── README.md               # GitHub-facing documentation
```

## 🎨 Design System (Aesthetic Signature)
- **Palette**: Midnight background (`#09090b`), Slate borders, Indigo/Purple accents.
- **Typography**:
    - **Headings**: `Outfit` (Modern, geometric)
    - **UI/Text**: `Inter` (Standard high-clarity sans-serif)
- **Signature UI Elements**:
    - **Book Index**: Dot-leader tabular rows used for curriculum indexing.
    - **Gap-1px Grid**: The primary layout method for cards (Courses, Stacks).
    - **Ghost Numbering**: Large, low-opacity monospace indices (01, 02...).
    - **The Logo**: Typographic pure CSS mark: `[ > ] CSxSE Dictionary`.

## 📜 Core Processes & Standard Operating Procedures (SOPs)
1.  **Deterministic Sorting**: Never use `sort()` on categories without mapping them back to the `MASTERY_SEQUENCE` array. Order is pedagogical, not alphabetical.
2.  **Minimalism**: Maintain the "Senior Engineer" look. High contrast, clean lines, no unnecessary imagery or emojis.
3.  **Cross-linking**: Every term must belong to a Category. Every Category must belong to a Phase.
4.  **Bulk Updates**: Use `scripts/add_missing_terms.js` to populate new domains to ensure consistency in frontmatter.

## 🚀 Technical State-of-the-Union
- **Current Modules**:
    1.  **Mastery Roadmap**: 6-phase high-level guidance.
    2.  **Curriculum Index**: Deep domain mapping.
    3.  **Architectural Blueprints**: Curated tech stacks for specific products.
    4.  **Engineering Lifecycle**: 6-column matrix of the professional SDLC.
- **Last Updated**: Phase 6 content integration and the removal of icons for a text-focued aesthetic.
