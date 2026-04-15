---
term: "Salt (Cryptographic)"
category: "Security"
level: "Intermediate"
---

A random value added to a password before hashing. Prevents rainbow table attacks and ensures identical passwords produce different hashes.

### Example

User A and B both have password 'hello'. With salts: hash('hello'+salt_A) ≠ hash('hello'+salt_B). Attackers can't precompute hashes for common passwords.
