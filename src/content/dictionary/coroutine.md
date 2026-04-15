---
term: "Coroutine"
category: "Programming Languages & Paradigms"
level: "Advanced"
---

A generalizable subroutine that can pause execution (yield) and resume later. More flexible than threads, lighter weight.

### Example

Python generators: def fib(): a,b=0,1; while True: yield a; a,b=b,a+b. Each call to next() resumes where it left off. Kotlin coroutines power Android async.
