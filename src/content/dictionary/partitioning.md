---
term: "Partitioning"
category: "Databases & Storage"
level: "Advanced"
---

Dividing a table into smaller pieces within the same database. Horizontal (by rows) or vertical (by columns). Improves query performance.

### Example

Partition the 'orders' table by year: orders_2023, orders_2024, orders_2025. Queries for 2025 data only scan the 2025 partition.
