# Entity Relationship Diagram (ERD)

Repositori ini adalah repositori panduan skill AI Agent (`frontend-god`).
Tidak ada relasi basis data relational native dalam repositori ini.

```mermaid
erDiagram
    SKILL ||--o{ REFERENCE : references
    SKILL ||--o{ EXAMPLE : provides
```
