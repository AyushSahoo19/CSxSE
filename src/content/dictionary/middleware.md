---
term: "Middleware"
category: "Backend Engineering"
level: "Intermediate"
---

Code that runs between the incoming request and the final route handler. Used for authentication, logging, error handling, CORS, etc.

### Example

Request → Auth Middleware (check JWT) → Logging Middleware (log request) → Rate Limit Middleware (check limits) → Route Handler (actual business logic) → Response.
