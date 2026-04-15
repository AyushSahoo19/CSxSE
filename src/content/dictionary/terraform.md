---
term: "Terraform"
category: "DevOps & Infrastructure"
level: "Intermediate"
---

An IaC tool that defines cloud infrastructure in declarative configuration files. Works with AWS, GCP, Azure, and 100+ providers.

### Example

resource 'aws_instance' 'web' { ami = 'ami-123' instance_type = 't2.micro' } — running 'terraform apply' creates the server. Change the file, re-apply to update.
