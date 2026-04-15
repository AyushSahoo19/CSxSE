---
term: "Vector Clock / Logical Clock"
category: "Distributed Systems"
level: "Expert"
---

A mechanism for tracking causality and ordering events in a distributed system where physical clocks can't be perfectly synchronized.

### Example

Node A and Node B both update the same record. Vector clocks detect the conflict: A's update didn't see B's update, so they're concurrent — manual resolution needed.
