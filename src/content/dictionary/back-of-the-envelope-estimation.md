---
term: "Back-of-the-Envelope Estimation"
category: "System Design & Architecture"
level: "Intermediate"
---

Quick, approximate calculations to estimate system requirements (storage, bandwidth, QPS) using powers of 2 and common benchmarks.

### Example

Twitter: 500M users, 20% daily active, avg 2 tweets/day = 200M tweets/day ≈ 2300 tweets/sec. 280 chars × 2 bytes ≈ 560 bytes/tweet. ~112 GB/day of tweet text.
