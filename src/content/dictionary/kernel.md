---
term: "Kernel"
category: "Operating Systems"
level: "Intermediate"
---

The core of an operating system. Manages CPU, memory, devices, and system calls. Runs in privileged mode with direct hardware access.

### Example

When you call open('file.txt'), your program makes a system call to the kernel, which handles the disk I/O and returns a file descriptor. User code can't touch hardware directly.
