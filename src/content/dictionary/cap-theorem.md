---
term: "CAP Theorem"
category: "System Design & Architecture"
level: "Advanced"
---

In a distributed system, you can guarantee at most 2 of 3: Consistency (all nodes see the same data), Availability (every request gets a response), Partition tolerance (system works despite network splits).

### Example

During a network partition: choose CP (MongoDB — reject writes to maintain consistency) or AP (Cassandra — accept writes, resolve conflicts later).
