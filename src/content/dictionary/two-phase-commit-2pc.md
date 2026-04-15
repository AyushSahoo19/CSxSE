---
term: "Two-Phase Commit (2PC)"
category: "Distributed Systems"
level: "Advanced"
---

A protocol ensuring all nodes in a distributed transaction either commit or abort. Phase 1: coordinator asks 'ready to commit?' Phase 2: coordinator says 'commit' or 'abort'.

### Example

Booking a flight + hotel: Phase 1: both services say 'ready.' Phase 2: coordinator says 'commit.' If either says 'not ready,' both abort.
