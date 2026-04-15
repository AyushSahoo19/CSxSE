---
term: "Exception Handling"
category: "Programming Languages & Paradigms"
level: "Foundational"
---

A mechanism for handling runtime errors gracefully using try/catch/finally blocks. Prevents crashes and enables recovery.

### Example

try { file = open('data.csv') } catch (FileNotFoundError) { log('File missing, using defaults') } — graceful degradation instead of a crash.
