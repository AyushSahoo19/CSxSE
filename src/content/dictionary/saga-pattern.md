---
term: "Saga Pattern"
category: "System Design & Architecture"
level: "Advanced"
---

Managing distributed transactions across multiple services using a sequence of local transactions with compensating actions for rollback.

### Example

Order flow: Reserve Inventory → Charge Payment → Ship. If shipping fails, compensating actions: refund payment → unreserve inventory.
