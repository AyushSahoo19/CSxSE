---
term: "JOIN"
category: "Databases & Storage"
level: "Foundational"
---

Combining rows from two or more tables based on a related column. Types: INNER (matching only), LEFT (all from left + matching), RIGHT, FULL OUTER.

### Example

SELECT orders.id, customers.name FROM orders INNER JOIN customers ON orders.customer_id = customers.id — combines order data with customer names.
