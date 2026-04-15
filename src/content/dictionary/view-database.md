---
term: "View (Database)"
category: "Databases & Storage"
level: "Intermediate"
---

A virtual table based on a SQL query. Doesn't store data itself — just provides a named, reusable query result.

### Example

CREATE VIEW active_users AS SELECT * FROM users WHERE last_login > '2025-01-01'; — now query 'active_users' like a table.
