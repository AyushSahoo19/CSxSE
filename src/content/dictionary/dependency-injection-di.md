---
term: "Dependency Injection (DI)"
category: "OOP & Design Patterns"
level: "Intermediate"
---

Instead of a class creating its own dependencies, they are 'injected' from outside. Makes code testable and loosely coupled.

### Example

UserService doesn't create its own DatabaseConnection — it receives one in its constructor. For testing, inject a mock database instead of a real one.
