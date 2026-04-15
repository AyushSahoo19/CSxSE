---
term: "Hash Collision"
category: "Data Structures"
level: "Intermediate"
---

When two different keys produce the same hash value. Resolved via chaining (linked list at each slot) or open addressing (probing).

### Example

hash('Alice')=7 and hash('Charlie')=7 — both want slot 7. Chaining: slot 7 holds a list [Alice, Charlie]. Probing: Charlie goes to slot 8.
