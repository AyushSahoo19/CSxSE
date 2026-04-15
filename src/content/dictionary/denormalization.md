---
term: "Denormalization"
category: "Databases & Storage"
level: "Intermediate"
---

Intentionally adding redundancy to a database to improve read performance. Trades storage and write complexity for faster reads.

### Example

Storing the customer's name directly in the Orders table so you don't need a JOIN on every order lookup. Common in read-heavy systems.
