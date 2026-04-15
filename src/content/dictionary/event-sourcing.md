---
term: "Event Sourcing"
category: "System Design & Architecture"
level: "Advanced"
---

Instead of storing current state, store a sequence of events that led to the current state. The state is derived by replaying events.

### Example

Bank account: instead of 'balance = $500', store: [Deposited $1000, Withdrew $300, Deposited $100, Withdrew $300]. Replay = $500. Full audit trail.
