---
term: "Async / Await"
category: "Programming Languages & Paradigms"
level: "Intermediate"
---

Syntax for writing asynchronous code that looks synchronous. 'await' pauses execution until a promise/future resolves, without blocking the thread.

### Example

const data = await fetch('/api/users'); — looks like it waits, but the thread is free to handle other requests while waiting for the network response.
