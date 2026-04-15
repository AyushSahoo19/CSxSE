---
term: "ETL vs ELT"
category: "Data Engineering & Big Data"
level: "Intermediate"
---

Data integration methodologies. ETL (Extract, Transform, Load) transforms data before loading into a warehouse. ELT (Extract, Load, Transform) loads raw data directly into the warehouse and uses the warehouse's power to transform it later.

### Example

Using Python scripts on a small server to clean sales data before pushing it to PostgreSQL (ETL), versus pushing raw JSON logs directly into Snowflake and using SQL to query schemas dynamically (ELT).
