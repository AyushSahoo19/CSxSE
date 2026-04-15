---
term: "Deadlock"
category: "Operating Systems"
level: "Intermediate"
---

A situation where two or more processes are each waiting for the other to release a resource, so none can proceed. Circular dependency.

### Example

Thread A holds Lock 1 and waits for Lock 2. Thread B holds Lock 2 and waits for Lock 1. Neither can continue — frozen forever.
