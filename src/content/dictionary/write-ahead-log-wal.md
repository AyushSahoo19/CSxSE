---
term: "Write-Ahead Log (WAL)"
category: "Databases & Storage"
level: "Advanced"
---

A log where changes are written before they're applied to the database. Ensures durability — if a crash occurs, replay the log to recover.

### Example

PostgreSQL's WAL: write 'UPDATE user SET name=X' to the log FIRST, then update the actual data. Crash? Replay the log. No data loss.
