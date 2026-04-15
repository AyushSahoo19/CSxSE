---
term: "Amortized Analysis"
category: "Algorithms"
level: "Advanced"
---

Analyzing the average time per operation over a sequence of operations, even if individual operations are occasionally expensive.

### Example

Dynamic array append is O(1) amortized — most appends are O(1), but occasionally it doubles the array (O(n)). Over n operations, total is O(n), so each is O(1) average.
