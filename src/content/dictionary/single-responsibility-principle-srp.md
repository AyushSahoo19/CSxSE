---
term: "Single Responsibility Principle (SRP)"
category: "OOP & Design Patterns"
level: "Intermediate"
---

A class should have only one reason to change — it should do one thing and do it well.

### Example

Don't make a UserService handle authentication AND email sending AND database queries. Split into AuthService, EmailService, UserRepository.
