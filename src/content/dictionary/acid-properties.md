---
term: "ACID Properties"
category: "System Design & Architecture"
level: "Intermediate"
---

Database transaction guarantees: Atomicity (all or nothing), Consistency (valid state transitions), Isolation (transactions don't interfere), Durability (committed data survives crashes).

### Example

Bank transfer: debit $100 from A and credit $100 to B either BOTH happen or NEITHER happens (Atomicity). Your balance is never wrong (Consistency).
