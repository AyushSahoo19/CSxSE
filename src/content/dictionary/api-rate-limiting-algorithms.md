---
term: "API Rate Limiting Algorithms"
category: "Backend Engineering"
level: "Advanced"
---

Token Bucket: tokens added at fixed rate, consumed per request. Sliding Window: count requests in a rolling time window. Leaky Bucket: requests processed at constant rate.

### Example

Token Bucket: 10 tokens/sec, bucket holds 100. Burst of 100 requests OK, then throttled to 10/sec. Popular choice for API rate limiting (simple, allows bursts).
