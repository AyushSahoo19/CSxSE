---
term: "Sharding"
category: "Databases & Storage"
level: "Advanced"
---

Splitting a database horizontally across multiple servers, where each server holds a subset of the data based on a shard key.

### Example

Users A-M on Server 1, N-Z on Server 2. Each server handles only half the queries. Used when one server can't handle the full dataset.
