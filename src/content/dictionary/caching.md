---
term: "Caching"
category: "System Design & Architecture"
level: "Intermediate"
---

Storing frequently accessed data in fast storage (RAM) to avoid expensive recomputation or database queries.

### Example

Instead of querying the database for a user's profile on every page load, cache it in Redis. Cache hit: 1ms. DB query: 50ms.
