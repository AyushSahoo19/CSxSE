---
term: "Mock / Stub / Spy"
category: "Testing & QA"
level: "Intermediate"
---

Test doubles that replace real dependencies. Mock: verifies interactions. Stub: returns predefined data. Spy: wraps real object and records calls.

### Example

Testing a payment service without charging real cards: stub the payment gateway to always return 'success'. Verify your code handles the response correctly.
