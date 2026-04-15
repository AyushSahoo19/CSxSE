---
term: "Background Job / Worker"
category: "Backend Engineering"
level: "Intermediate"
---

Tasks that run asynchronously, outside the request-response cycle. For long-running or non-urgent work: email sending, image processing, report generation.

### Example

User uploads a video. API responds '202 Accepted' immediately. A background worker picks up the job, processes the video, and notifies the user when done.
