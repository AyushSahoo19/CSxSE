---
term: "Mutex (Mutual Exclusion)"
category: "Operating Systems"
level: "Intermediate"
---

A synchronization mechanism that ensures only one thread can access a shared resource at a time. Like a bathroom lock — one person at a time.

### Example

Two threads updating the same bank balance. Without a mutex: both read $100, both add $50, both write $150 (lost update). With mutex: one waits, result is $200.
