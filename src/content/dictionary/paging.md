---
term: "Paging"
category: "Operating Systems"
level: "Advanced"
---

Dividing virtual memory into fixed-size blocks (pages) and physical memory into frames. Pages map to frames via a page table. Enables non-contiguous allocation.

### Example

A program's memory is divided into 4KB pages. Page 0 might be in RAM frame 47, page 1 in frame 12 — they don't need to be adjacent.
