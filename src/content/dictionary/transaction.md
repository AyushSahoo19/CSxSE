---
term: "Transaction"
category: "Databases & Storage"
level: "Intermediate"
---

A group of database operations that must all succeed or all fail together (atomic). Maintains data integrity.

### Example

Transferring $100: BEGIN → debit(A, 100) → credit(B, 100) → COMMIT. If credit fails, debit is rolled back. Money is never lost or created.
