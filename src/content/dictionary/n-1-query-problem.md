---
term: "N+1 Query Problem"
category: "Backend Engineering"
level: "Intermediate"
---

A performance anti-pattern where loading N items triggers N additional database queries (one per item). Solved by eager loading or batching.

### Example

Loading 100 blog posts: 1 query to get posts + 100 queries to get each author. Fix: 1 query for posts + 1 query for all authors (eager loading). 101 queries → 2.
