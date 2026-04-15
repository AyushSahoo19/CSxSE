---
term: "Abstract Class"
category: "OOP & Design Patterns"
level: "Intermediate"
---

A class that can't be instantiated directly. May have abstract methods (no implementation) that subclasses must implement, plus concrete methods they inherit.

### Example

abstract class Shape { abstract area(); perimeter() {...} }. You can't create 'a shape' — you create a Circle or Rectangle that IS a shape.
