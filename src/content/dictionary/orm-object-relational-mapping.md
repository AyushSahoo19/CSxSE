---
term: "ORM (Object-Relational Mapping)"
category: "Databases & Storage"
level: "Intermediate"
---

A technique that lets you interact with a database using your programming language's objects instead of raw SQL.

### Example

Instead of writing SQL: SELECT * FROM users WHERE id=1, you write: User.findById(1). The ORM generates the SQL for you. Examples: Prisma, SQLAlchemy, Hibernate.
