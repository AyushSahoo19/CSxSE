---
term: "Replication"
category: "Databases & Storage"
level: "Advanced"
---

Copying data across multiple servers for redundancy and read scalability. Types: master-slave (one writes, many read), master-master (all read/write).

### Example

Primary database in US handles writes. Replicas in Europe and Asia handle local reads. If primary fails, a replica is promoted.
