---
term: "Pub/Sub (Publish-Subscribe)"
category: "System Design & Architecture"
level: "Intermediate"
---

A messaging pattern where publishers send messages to topics, and subscribers receive messages from topics they're interested in. Complete decoupling.

### Example

A 'user-signup' topic: the email service, analytics service, and CRM service all subscribe independently. Adding a new subscriber requires zero changes to the publisher.
