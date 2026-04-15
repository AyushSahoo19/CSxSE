---
term: "Pagination"
category: "Backend Engineering"
level: "Foundational"
---

Dividing large result sets into smaller pages. Prevents loading millions of records at once. Types: offset-based, cursor-based.

### Example

GET /posts?page=3&size=20 returns posts 41-60. Cursor-based: GET /posts?after=post_40&limit=20 — more efficient for large datasets (no counting rows).
