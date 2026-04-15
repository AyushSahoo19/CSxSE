---
term: "Terraform / CloudFormation"
category: "Cloud & Scalability"
level: "Intermediate"
---

IaC tools for provisioning cloud infrastructure. Terraform: multi-cloud, uses HCL. CloudFormation: AWS-only, uses JSON/YAML.

### Example

Terraform: resource 'aws_s3_bucket' 'photos' { bucket = 'user-photos' }. Run terraform apply — bucket created. Run terraform destroy — bucket removed. Version-controlled infrastructure.
