---
term: "Quorum"
category: "Distributed Systems"
level: "Advanced"
---

The minimum number of nodes that must agree on an operation for it to be considered successful. In a cluster of N nodes, quorum is typically (N/2)+1.

### Example

5-node cluster, quorum = 3. A write must be acknowledged by 3 nodes to succeed. If 2 nodes are down, writes still succeed. If 3 are down, writes fail — prevents split brain.
