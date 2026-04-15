---
term: "Composition over Inheritance"
category: "OOP & Design Patterns"
level: "Intermediate"
---

Design principle: build complex objects by combining simpler ones (has-a) rather than inheriting (is-a). More flexible, avoids deep hierarchies.

### Example

Instead of ElectricFlyingCar extending Car, use: Car has-a Engine, has-a FlyingModule. Swap components without rewriting class hierarchies.
