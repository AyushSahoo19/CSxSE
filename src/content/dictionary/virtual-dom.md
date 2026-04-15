---
term: "Virtual DOM"
category: "Frontend Engineering"
level: "Intermediate"
---

A lightweight copy of the real DOM kept in memory. When state changes, the framework computes the minimal diff and only updates what changed in the real DOM.

### Example

React: you change one item in a list of 1000. Virtual DOM diffs and updates only that one <li> element — not all 1000. Performance optimization.
