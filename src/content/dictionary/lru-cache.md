---
term: "LRU Cache"
category: "Data Structures"
level: "Intermediate"
---

A fixed-size cache that evicts the Least Recently Used item when full. Combines a hash map (O(1) lookup) with a doubly linked list (O(1) reordering).

### Example

Browser cache — stores recently visited pages. When memory fills up, it drops the page you haven't visited in the longest time.
