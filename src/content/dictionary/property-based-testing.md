---
term: "Property-Based Testing"
category: "Testing & QA"
level: "Advanced"
---

Instead of testing specific examples, define properties that should ALWAYS hold, and the framework generates hundreds of random inputs to test them.

### Example

Property: 'reversing a list twice gives the original list.' Framework tests with [], [1], [1,2,3], [99,0,-5,...] — hundreds of cases you'd never manually write.
