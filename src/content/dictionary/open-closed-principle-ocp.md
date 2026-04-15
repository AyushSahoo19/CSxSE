---
term: "Open/Closed Principle (OCP)"
category: "OOP & Design Patterns"
level: "Intermediate"
---

Software entities should be open for extension but closed for modification. Add new features by writing new code, not changing existing code.

### Example

Adding a new payment method shouldn't require modifying the PaymentProcessor. Instead, create a new class implementing the PaymentMethod interface.
