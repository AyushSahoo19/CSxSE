---
term: "REST API Design"
category: "Backend Engineering"
level: "Intermediate"
---

Best practices for designing RESTful APIs: use nouns for URLs, HTTP methods for actions, proper status codes, pagination, versioning.

### Example

GET /api/v1/users?page=2&limit=20 — good. GET /api/getUsers — bad (verb in URL). Return 201 for creation, 404 for not found, 422 for validation errors.
