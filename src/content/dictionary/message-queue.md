---
term: "Message Queue"
category: "System Design & Architecture"
level: "Intermediate"
---

A buffer between producers and consumers of messages. Enables asynchronous processing and decouples services.

### Example

User uploads a video → message goes to queue → video processing service picks it up when ready. The user doesn't wait for processing to complete.
