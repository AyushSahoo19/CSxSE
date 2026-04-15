---
term: "BASE Properties"
category: "System Design & Architecture"
level: "Advanced"
---

Alternative to ACID for distributed systems: Basically Available, Soft state, Eventually consistent. Trades strong consistency for availability and performance.

### Example

Instagram likes: if you like a post, your friend might see the old count for a few seconds (eventually consistent), but the system never goes down (available).
