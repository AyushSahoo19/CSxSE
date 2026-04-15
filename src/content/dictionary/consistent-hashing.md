---
term: "Consistent Hashing"
category: "Distributed Systems"
level: "Advanced"
---

A hashing technique where adding or removing a server only requires remapping K/N keys (K=total keys, N=servers). Minimizes redistribution.

### Example

With 4 cache servers, adding a 5th only moves ~20% of keys (not 100%). Essential for distributed caches and databases. Used by DynamoDB, Cassandra.
