---
term: "Counting Sort / Radix Sort"
category: "Algorithms"
level: "Intermediate"
---

Non-comparison sorts. Counting sort counts occurrences of each value. Radix sort sorts digit by digit. O(n+k) or O(d·(n+k)). Beat O(n log n) for specific data.

### Example

Sorting 1 million exam scores (0-100): count how many got each score, then output. 101 buckets, one pass. Way faster than quicksort here.
