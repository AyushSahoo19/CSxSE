---
term: "I/O Bound vs CPU Bound"
category: "Operating Systems"
level: "Intermediate"
---

I/O bound: program speed limited by input/output (disk, network). CPU bound: limited by processing power. Different optimizations for each.

### Example

Web server waiting for DB responses = I/O bound (use async I/O, more threads). Bitcoin mining = CPU bound (need faster processors, more cores).
