---
term: "Cache Coherence"
category: "Computer Architecture & Hardware"
level: "Expert"
---

The uniformity of shared resource data that ends up stored in multiple local caches. When clients in a system maintain caches of a common memory resource, problems may arise with inconsistent data.

### Example

In a multi-core processor, if Core A modifies variable X in its L1 cache, Cache Coherence protocols (like MESI) ensure Core B sees the updated value instead of stale data.
