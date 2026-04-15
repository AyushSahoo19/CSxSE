---
term: "Split Brain"
category: "Distributed Systems"
level: "Advanced"
---

A scenario where a network partition causes different parts of a distributed system to independently believe they are the leader, leading to conflicting actions.

### Example

Network splits cluster into two halves. Each half elects its own leader and accepts writes. When the network heals, there are conflicting writes to reconcile.
