---
term: "Garbage Collected vs Manual Memory"
category: "Programming Languages & Paradigms"
level: "Intermediate"
---

GC languages (Java, Python, Go) automatically free unused memory. Manual languages (C, C++) require programmers to allocate/free memory explicitly.

### Example

Java: create objects freely, GC cleans up. C: malloc() to allocate, free() when done — forget to free = memory leak. Free twice = crash.
