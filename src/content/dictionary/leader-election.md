---
term: "Leader Election"
category: "Distributed Systems"
level: "Advanced"
---

The process of designating one node as the coordinator (leader) in a distributed system. The leader makes decisions; followers replicate.

### Example

In a distributed database, the leader node handles writes and replicates to followers. If the leader crashes, a new election occurs (Raft/Paxos).
