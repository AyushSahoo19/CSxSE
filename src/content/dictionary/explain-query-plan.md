---
term: "EXPLAIN / Query Plan"
category: "Databases & Storage"
level: "Advanced"
---

Shows how the database will execute a query — which indexes it uses, join order, estimated cost. Essential for performance optimization.

### Example

EXPLAIN SELECT * FROM orders WHERE user_id = 42; reveals if the query uses the user_id index or does a full table scan (slow).
