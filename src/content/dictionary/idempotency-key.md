---
term: "Idempotency Key"
category: "Backend Engineering"
level: "Advanced"
---

A unique identifier sent with a request to ensure it's processed exactly once, even if retried. Critical for payment processing.

### Example

Client sends payment with idempotency_key='abc123'. Network fails, client retries with same key. Server sees 'abc123' was already processed — returns cached result, doesn't charge twice.
