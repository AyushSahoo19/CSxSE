---
term: "SQL Injection"
category: "Security"
level: "Intermediate"
---

An attack where malicious SQL is inserted into a query through user input. Can read, modify, or delete database data.

### Example

Input: ' OR 1=1; DROP TABLE users; --. If the app concatenates this into SQL without sanitizing, the entire users table is deleted. Use parameterized queries.
