---
term: "Context Switch"
category: "Operating Systems"
level: "Intermediate"
---

The OS saving the state of the current process/thread and loading the state of the next one. Has overhead — registers, program counter, memory maps all switch.

### Example

CPU working on Process A, timer interrupt fires, OS saves A's state, loads Process B's state, CPU now works on B. Happens thousands of times per second.
