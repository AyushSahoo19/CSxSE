---
term: "Consensus Algorithms (Raft / Paxos)"
category: "Distributed Systems"
level: "Expert"
---

Algorithms that allow distributed nodes to agree on a value even if some nodes fail. Foundation for distributed databases and leader election.

### Example

Raft: nodes elect a leader, leader replicates log entries to followers. If leader dies, a new one is elected automatically. Used in etcd, CockroachDB.
