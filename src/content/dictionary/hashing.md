---
term: "Hashing"
category: "Security"
level: "Intermediate"
---

Converting input into a fixed-size string using a one-way function. Same input always produces the same hash. Cannot be reversed. Used for password storage.

### Example

hash('password123') → 'ef92b778...'. Store the hash, not the password. When user logs in, hash their input and compare. Even if DB is stolen, passwords are safe.
