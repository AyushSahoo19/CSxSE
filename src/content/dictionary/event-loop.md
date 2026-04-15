---
term: "Event Loop"
category: "Programming Languages & Paradigms"
level: "Intermediate"
---

A mechanism that continuously checks for and processes events/callbacks. Core of JavaScript's concurrency model — single-threaded but non-blocking via the event loop.

### Example

Node.js: one thread handles thousands of connections. When a DB query is waiting, the event loop picks up the next request. When the query returns, its callback runs.
