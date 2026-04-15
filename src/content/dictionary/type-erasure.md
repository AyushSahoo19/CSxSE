---
term: "Type Erasure"
category: "Programming Languages & Paradigms"
level: "Advanced"
---

Generics information is removed at compile time (Java) or runtime. The compiled code doesn't know the generic type — it's 'erased'.

### Example

Java: List<String> and List<Integer> are both just List at runtime. You can't check 'if (list instanceof List<String>)' — the type info is gone.
