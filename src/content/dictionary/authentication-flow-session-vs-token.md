---
term: "Authentication Flow (Session vs Token)"
category: "Backend Engineering"
level: "Intermediate"
---

Session-based: server stores session state, sends session ID cookie. Token-based: server issues JWT, client stores and sends it. Token is stateless and scalable.

### Example

Session: server memory holds 'session123 = {userId: 42}'. Token: JWT contains {userId: 42} signed by server — any server can verify it without shared state.
