variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "eu-west-1"
}

variable "domain_name" {
  description = "Domain name for the website (e.g., example.com). Leave empty to use CloudFront domain"
  type        = string
  default     = ""
}

variable "subdomain_name" {
  description = "Subdomain name for the website (e.g., www.example.com). Leave empty if not needed"
  type        = string
  default     = ""
}

variable "index_document" {
  description = "Index document for the website"
  type        = string
  default     = "index.html"
}

variable "error_document" {
  description = "Error document for the website"
  type        = string
  default     = "error.html"
}

variable "cloudfront_price_class" {
  description = "CloudFront distribution price class"
  type        = string
  default     = "PriceClass_100"
  validation {
    condition = contains([
      "PriceClass_All",
      "PriceClass_200",
      "PriceClass_100"
    ], var.cloudfront_price_class)
    error_message = "CloudFront price class must be one of: PriceClass_All, PriceClass_200, PriceClass_100."
  }
}

variable "manage_dns" {
  description = "Whether to manage DNS records in Route53. Requires domain_name to be set and Route53 hosted zone to exist"
  type        = bool
  default     = false
}

variable "certificate_domain" {
  description = "Domain name of the existing ACM certificate to use (must exist in us-east-1 region for CloudFront compatibility)"
  type        = string
  default     = "konstantinos-konstantinidis.gr"
  validation {
    condition     = length(var.certificate_domain) > 0
    error_message = "Certificate domain must be specified and cannot be empty."
  }
}

variable "tags" {
  description = "Tags to apply to resources"
  type        = map(string)
  default = {
    Project     = "Website"
    Environment = "production"
    ManagedBy   = "Terraform"
  }
}