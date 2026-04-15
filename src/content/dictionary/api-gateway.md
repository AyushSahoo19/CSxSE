---
term: "API Gateway"
category: "System Design & Architecture"
level: "Intermediate"
---

A single entry point for all client requests that routes to appropriate backend services. Handles auth, rate limiting, logging, and request aggregation.

### Example

Instead of the mobile app calling 5 different services, it calls one API Gateway which fans out requests and combines responses.
