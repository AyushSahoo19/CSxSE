---
term: "Microservice Communication (Sync vs Async)"
category: "Backend Engineering"
level: "Advanced"
---

Sync: service A calls service B and waits for response (REST/gRPC). Async: service A sends a message and continues (message queue). Tradeoffs: simplicity vs resilience.

### Example

Sync: Order Service calls Payment Service, waits for result. Async: Order Service publishes 'OrderCreated' event, Payment Service processes independently.
