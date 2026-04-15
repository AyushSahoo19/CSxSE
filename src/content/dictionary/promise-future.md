---
term: "Promise / Future"
category: "Programming Languages & Paradigms"
level: "Intermediate"
---

An object representing a value that will be available in the future. Can be pending, fulfilled (success), or rejected (error). Foundation of async programming.

### Example

fetch('/api/data') returns a Promise. It's pending while the request travels. When data arrives, it's fulfilled. If the server is down, it's rejected.
