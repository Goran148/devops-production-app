variable "aws_region" {
  description = "AWS region infrastructure will be created"
  type        = string
  default     = "eu-central-1"
}

variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
  default     = "devops-production-app"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.small"
}

variable "key_name" {
  description = "Name of the existing AWS EC2 key pair"
  type        = string
}