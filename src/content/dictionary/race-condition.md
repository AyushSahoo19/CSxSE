---
term: "Race Condition"
category: "Operating Systems"
level: "Intermediate"
---

A bug where the system's behavior depends on the timing/ordering of events (typically thread execution order). Produces unpredictable, intermittent failures.

### Example

Two threads incrementing a counter: both read 5, both write 6. Expected: 7. Got: 6. The 'race' between threads caused a lost update. Maddeningly hard to reproduce.
