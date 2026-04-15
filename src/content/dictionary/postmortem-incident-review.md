---
term: "Postmortem / Incident Review"
category: "Software Engineering Process"
level: "Intermediate"
---

A blameless analysis after an incident or outage. Documents: what happened, timeline, root cause, what was done, and how to prevent recurrence.

### Example

Database outage at 3 AM. Postmortem reveals: disk filled up, no monitoring alert existed, auto-cleanup wasn't configured. Action items: add alerts, implement cleanup cron.
