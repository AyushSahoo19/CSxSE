---
term: "Connection Pooling"
category: "Databases & Storage"
level: "Intermediate"
---

Maintaining a pool of reusable database connections instead of opening/closing a new one for each request. Reduces overhead.

### Example

A pool of 20 connections serves 1000 requests/sec by reusing connections. Without pooling, opening 1000 connections/sec would overwhelm the database.
