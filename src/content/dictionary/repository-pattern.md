---
term: "Repository Pattern"
category: "OOP & Design Patterns"
level: "Intermediate"
---

Abstracts data access behind a clean interface. Business logic talks to the repository, not directly to the database.

### Example

UserRepository.findById(42) — the business logic doesn't know if it's using PostgreSQL, MongoDB, or a file. Swap databases without changing business code.
