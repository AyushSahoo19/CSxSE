---
term: "Event-Driven Architecture"
category: "System Design & Architecture"
level: "Intermediate"
---

Components communicate by producing and consuming events (immutable facts about something that happened). Loose coupling, asynchronous.

### Example

OrderPlaced event → Inventory Service reserves stock, Payment Service charges card, Email Service sends confirmation — all independently, no direct calls.
