---
term: "Factory Pattern"
category: "OOP & Design Patterns"
level: "Intermediate"
---

Creates objects without exposing instantiation logic. A 'factory' method decides which class to instantiate based on input.

### Example

NotificationFactory.create('email') returns an EmailNotification. create('sms') returns SMSNotification. The caller doesn't know or care about the concrete classes.
