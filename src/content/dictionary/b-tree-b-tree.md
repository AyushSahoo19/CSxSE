---
term: "B-Tree / B+ Tree"
category: "Data Structures"
level: "Advanced"
---

A self-balancing tree designed for disk-based storage. Each node can have many children, minimizing disk reads. B+ trees store all data in leaves.

### Example

Database indexes use B+ trees. Instead of reading disk 20 times (binary tree depth), a B+ tree of order 100 needs only 3-4 reads for millions of rows.
