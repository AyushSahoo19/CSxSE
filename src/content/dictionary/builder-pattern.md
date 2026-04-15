---
term: "Builder Pattern"
category: "OOP & Design Patterns"
level: "Intermediate"
---

Constructs complex objects step by step. Separates construction from representation so the same process can create different objects.

### Example

QueryBuilder().select('name').from('users').where('age > 18').build() — chain methods to construct a complex SQL query piece by piece.
