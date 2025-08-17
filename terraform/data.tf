# Certificate lookup in us-east-1 (required for CloudFront)
# CloudFront requires SSL certificates to be in us-east-1 region regardless of where other resources are located
data "aws_acm_certificate" "existing" {
  provider = aws.us_east_1
  domain   = var.certificate_domain
  statuses = ["ISSUED"]
}


# Route53 Hosted Zone (if domain management is enabled)
data "aws_route53_zone" "main" {
  count = var.domain_name != "" && var.manage_dns ? 1 : 0
  name  = var.domain_name
}