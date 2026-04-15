---
term: "CQRS (Command Query Responsibility Segregation)"
category: "System Design & Architecture"
level: "Advanced"
---

Separates read operations (queries) from write operations (commands) into different models, potentially different databases.

### Example

Writes go to a normalized PostgreSQL database. Reads come from a denormalized Elasticsearch index optimized for search. Sync via events.
