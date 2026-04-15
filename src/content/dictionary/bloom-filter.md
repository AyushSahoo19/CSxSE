---
term: "Bloom Filter"
category: "Data Structures"
level: "Advanced"
---

A probabilistic data structure that can tell you 'definitely not in set' or 'probably in set'. Uses multiple hash functions and a bit array. No false negatives.

### Example

Email spam filter: quickly checks if a domain is 'probably spam'. May have false positives (legitimate domain flagged) but never misses actual spam domains.
