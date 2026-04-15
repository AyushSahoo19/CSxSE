---
term: "Migration (Database)"
category: "Databases & Storage"
level: "Intermediate"
---

Version-controlled changes to a database schema. Each migration file defines changes (add table, modify column) and how to undo them.

### Example

Migration #5: ADD COLUMN 'phone' TO users. Migration #6: CREATE TABLE orders. Applied in order, can be rolled back in reverse order.
