---
term: "Circuit Breaker Pattern"
category: "System Design & Architecture"
level: "Advanced"
---

Prevents cascading failures by stopping calls to a failing service. States: Closed (normal), Open (failing, reject calls), Half-Open (test if recovered).

### Example

If the payment service fails 5 times in 10 seconds, the circuit breaker 'opens' — all payment requests immediately get 'service unavailable' instead of timing out.
