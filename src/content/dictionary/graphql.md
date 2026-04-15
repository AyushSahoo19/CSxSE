---
term: "GraphQL"
category: "Networking & Web"
level: "Intermediate"
---

A query language for APIs where the client specifies exactly what data it needs. Solves REST's over-fetching and under-fetching problems.

### Example

Instead of GET /users/42 returning 50 fields, you query { user(id: 42) { name, email } } and get only name and email. One request, exact data.
