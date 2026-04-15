---
term: "Service Discovery"
category: "Distributed Systems"
level: "Advanced"
---

The mechanism by which services find each other's network addresses in a dynamic environment where instances are constantly created and destroyed.

### Example

Service A needs to call Service B, but B has 10 instances with dynamic IPs. Service discovery (Consul, Kubernetes DNS) tells A where B's instances are.
