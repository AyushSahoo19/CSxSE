---
term: "Semaphore"
category: "Operating Systems"
level: "Intermediate"
---

A synchronization tool that controls access to a resource by maintaining a counter. Unlike mutex (binary: 0 or 1), semaphore can allow N concurrent accesses.

### Example

A parking lot with 50 spaces. Semaphore count = 50. Each car entering decrements (49, 48...). At 0, new cars wait. Car leaving increments. Limits concurrency.
