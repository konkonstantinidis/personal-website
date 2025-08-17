output "s3_bucket_name" {
  description = "Name of the S3 bucket"
  value       = aws_s3_bucket.website.id
}

output "s3_bucket_arn" {
  description = "ARN of the S3 bucket"
  value       = aws_s3_bucket.website.arn
}

output "s3_bucket_domain_name" {
  description = "Domain name of the S3 bucket"
  value       = aws_s3_bucket.website.bucket_domain_name
}

output "s3_website_endpoint" {
  description = "Website endpoint of the S3 bucket"
  value       = aws_s3_bucket_website_configuration.website.website_endpoint
}

output "cloudfront_distribution_id" {
  description = "ID of the CloudFront distribution"
  value       = aws_cloudfront_distribution.website.id
}

output "cloudfront_distribution_arn" {
  description = "ARN of the CloudFront distribution"
  value       = aws_cloudfront_distribution.website.arn
}

output "cloudfront_domain_name" {
  description = "Domain name of the CloudFront distribution"
  value       = aws_cloudfront_distribution.website.domain_name
}

output "cloudfront_hosted_zone_id" {
  description = "Hosted zone ID of the CloudFront distribution"
  value       = aws_cloudfront_distribution.website.hosted_zone_id
}

output "ssl_certificate_arn" {
  description = "ARN of the SSL certificate"
  value       = data.aws_acm_certificate.existing.arn
}

output "website_url" {
  description = "URL of the website"
  value = var.domain_name != "" ? (
    var.manage_dns ? "https://${var.domain_name}" : "https://${aws_cloudfront_distribution.website.domain_name}"
  ) : "https://${aws_cloudfront_distribution.website.domain_name}"
}

output "route53_zone_id" {
  description = "Route53 hosted zone ID (if DNS is managed)"
  value       = var.domain_name != "" && var.manage_dns ? data.aws_route53_zone.main[0].zone_id : null
}

output "deployment_instructions" {
  description = "Instructions for deploying website files"
  value       = <<-EOT
    To deploy your website files:
    
    1. Upload files to S3 bucket:
       aws s3 sync ./your-website-files/ s3://${aws_s3_bucket.website.id}/
    
    2. Invalidate CloudFront cache (optional, for updates):
       aws cloudfront create-invalidation --distribution-id ${aws_cloudfront_distribution.website.id} --paths "/*"
    
    3. Access your website at:
       ${var.domain_name != "" ? (var.manage_dns ? "https://${var.domain_name}" : "https://${aws_cloudfront_distribution.website.domain_name}") : "https://${aws_cloudfront_distribution.website.domain_name}"}
  EOT
}