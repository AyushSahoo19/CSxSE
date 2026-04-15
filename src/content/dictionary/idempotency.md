---
term: "Idempotency"
category: "System Design & Architecture"
level: "Intermediate"
---

An operation is idempotent if performing it multiple times produces the same result as performing it once. Critical for reliable distributed systems.

### Example

HTTP PUT is idempotent: setting user email to 'a@b.com' ten times has the same effect as once. HTTP POST (create) is NOT — you'd create 10 records.
