---
term: "Closure"
category: "Programming Languages & Paradigms"
level: "Intermediate"
---

A function that 'remembers' variables from its enclosing scope, even after the outer function has returned. The function 'closes over' its environment.

### Example

function counter() { let count=0; return () => ++count; } const inc = counter(); inc()→1, inc()→2. The inner function remembers 'count' even after counter() returned.
