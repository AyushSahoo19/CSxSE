---
term: "JWT (JSON Web Token)"
category: "Networking & Web"
level: "Intermediate"
---

A self-contained token format for securely transmitting information between parties as JSON. Digitally signed, can be verified without a database lookup.

### Example

After login, server creates a JWT containing { userId: 42, role: 'admin', exp: '2025-12-31' }. Client sends it with every request. Server verifies the signature without hitting the DB.
