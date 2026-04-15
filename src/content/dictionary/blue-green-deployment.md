---
term: "Blue-Green Deployment"
category: "DevOps & Infrastructure"
level: "Intermediate"
---

Running two identical environments: Blue (current) and Green (new). Switch traffic from Blue to Green when ready. Instant rollback by switching back.

### Example

Green environment has the new version, fully tested. Flip the load balancer from Blue to Green — zero downtime. If something's wrong, flip back in seconds.
