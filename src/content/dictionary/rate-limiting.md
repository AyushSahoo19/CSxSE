---
term: "Rate Limiting"
category: "System Design & Architecture"
level: "Intermediate"
---

Controlling the number of requests a client can make in a given time period. Prevents abuse and protects system resources.

### Example

Twitter API: 300 requests per 15 minutes per user. Exceeding it returns HTTP 429 'Too Many Requests'. Algorithms: token bucket, sliding window.
