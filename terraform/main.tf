# Default AWS provider for main resources (eu-west-1)
provider "aws" {
  region = var.aws_region
}

# Separate AWS provider for us-east-1 (required for CloudFront certificates)
# CloudFront is a global service that requires SSL certificates to be in us-east-1
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

# S3 bucket for website hosting
resource "aws_s3_bucket" "website" {
  bucket = "konstantinos-konstantinidis-website"
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  index_document {
    suffix = var.index_document
  }

  error_document {
    key = var.error_document
  }
}

resource "aws_s3_bucket_versioning" "website" {
  bucket = aws_s3_bucket.website.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "website" {
  bucket = aws_s3_bucket.website.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# CloudFront Origin Access Control
resource "aws_cloudfront_origin_access_control" "website" {
  name                              = "${aws_s3_bucket.website.id}-oac"
  description                       = "OAC for ${aws_s3_bucket.website.id}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# CloudFront Response Headers Policy for Security
resource "aws_cloudfront_response_headers_policy" "website" {
  name    = "${aws_s3_bucket.website.id}-security-headers"
  comment = "Security headers policy for ${aws_s3_bucket.website.id}"

  security_headers_config {
    strict_transport_security {
      access_control_max_age_sec = 31536000
      include_subdomains         = true
      preload                    = true
      override                   = true
    }
    content_type_options {
      override = true
    }
    frame_options {
      frame_option = "DENY"
      override     = true
    }
    referrer_policy {
      referrer_policy = "strict-origin-when-cross-origin"
      override        = true
    }
  }
}


# CloudFront Distribution
resource "aws_cloudfront_distribution" "website" {
  origin {
    domain_name              = aws_s3_bucket.website.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.website.id
    origin_id                = "S3-${aws_s3_bucket.website.id}"
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Website distribution for ${aws_s3_bucket.website.id}"
  default_root_object = var.index_document

  aliases = var.domain_name != "" ? compact([var.domain_name, var.subdomain_name]) : []

  default_cache_behavior {
    allowed_methods            = ["GET", "HEAD", "OPTIONS"]
    cached_methods             = ["GET", "HEAD"]
    target_origin_id           = "S3-${aws_s3_bucket.website.id}"
    compress                   = true
    viewer_protocol_policy     = "redirect-to-https"
    response_headers_policy_id = aws_cloudfront_response_headers_policy.website.id

    cache_policy_id = "4135ea2d-6df8-44a3-9df3-4b5a84be39ad" # Managed-CachingDisabled for SPA

    origin_request_policy_id = "88a5eaf4-2fd4-4709-b370-b4c650ea3fcf" # Managed-CORS-S3Origin
  }

  # Cache behavior for static assets (CSS, JS, images, etc.)
  ordered_cache_behavior {
    path_pattern               = "/assets/*"
    allowed_methods            = ["GET", "HEAD", "OPTIONS"]
    cached_methods             = ["GET", "HEAD"]
    target_origin_id           = "S3-${aws_s3_bucket.website.id}"
    compress                   = true
    viewer_protocol_policy     = "redirect-to-https"
    response_headers_policy_id = aws_cloudfront_response_headers_policy.website.id

    cache_policy_id = "b2884449-e4de-46a7-ac36-70bc7f1ddd6d" # Managed-CachingOptimized for static assets
  }

  # Cache behavior for CSS and JS files
  ordered_cache_behavior {
    path_pattern               = "*.css"
    allowed_methods            = ["GET", "HEAD", "OPTIONS"]
    cached_methods             = ["GET", "HEAD"]
    target_origin_id           = "S3-${aws_s3_bucket.website.id}"
    compress                   = true
    viewer_protocol_policy     = "redirect-to-https"
    response_headers_policy_id = aws_cloudfront_response_headers_policy.website.id

    cache_policy_id = "b2884449-e4de-46a7-ac36-70bc7f1ddd6d" # Managed-CachingOptimized for static assets
  }

  # Cache behavior for JavaScript files
  ordered_cache_behavior {
    path_pattern               = "*.js"
    allowed_methods            = ["GET", "HEAD", "OPTIONS"]
    cached_methods             = ["GET", "HEAD"]
    target_origin_id           = "S3-${aws_s3_bucket.website.id}"
    compress                   = true
    viewer_protocol_policy     = "redirect-to-https"
    response_headers_policy_id = aws_cloudfront_response_headers_policy.website.id

    cache_policy_id = "b2884449-e4de-46a7-ac36-70bc7f1ddd6d" # Managed-CachingOptimized for static assets
  }

  # Cache behavior for image files
  ordered_cache_behavior {
    path_pattern               = "*.png"
    allowed_methods            = ["GET", "HEAD", "OPTIONS"]
    cached_methods             = ["GET", "HEAD"]
    target_origin_id           = "S3-${aws_s3_bucket.website.id}"
    compress                   = true
    viewer_protocol_policy     = "redirect-to-https"
    response_headers_policy_id = aws_cloudfront_response_headers_policy.website.id

    cache_policy_id = "b2884449-e4de-46a7-ac36-70bc7f1ddd6d" # Managed-CachingOptimized for static assets
  }

  # Cache behavior for more image files
  ordered_cache_behavior {
    path_pattern               = "*.jpg"
    allowed_methods            = ["GET", "HEAD", "OPTIONS"]
    cached_methods             = ["GET", "HEAD"]
    target_origin_id           = "S3-${aws_s3_bucket.website.id}"
    compress                   = true
    viewer_protocol_policy     = "redirect-to-https"
    response_headers_policy_id = aws_cloudfront_response_headers_policy.website.id

    cache_policy_id = "b2884449-e4de-46a7-ac36-70bc7f1ddd6d" # Managed-CachingOptimized for static assets
  }

  # Cache behavior for SVG and icon files
  ordered_cache_behavior {
    path_pattern               = "*.svg"
    allowed_methods            = ["GET", "HEAD", "OPTIONS"]
    cached_methods             = ["GET", "HEAD"]
    target_origin_id           = "S3-${aws_s3_bucket.website.id}"
    compress                   = true
    viewer_protocol_policy     = "redirect-to-https"
    response_headers_policy_id = aws_cloudfront_response_headers_policy.website.id

    cache_policy_id = "b2884449-e4de-46a7-ac36-70bc7f1ddd6d" # Managed-CachingOptimized for static assets
  }

  price_class = var.cloudfront_price_class

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    # Use certificate from us-east-1 (CloudFront requirement)
    acm_certificate_arn            = data.aws_acm_certificate.existing.arn
    ssl_support_method             = "sni-only"
    minimum_protocol_version       = "TLSv1.2_2021"
    cloudfront_default_certificate = false
  }

  # SPA-friendly error handling - redirect all routes to index.html
  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/${var.index_document}"
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/${var.index_document}"
  }

  # Actual error page for server errors
  custom_error_response {
    error_code         = 500
    response_code      = 500
    response_page_path = "/${var.error_document}"
  }

  depends_on = [
    data.aws_acm_certificate.existing
  ]
}

# S3 bucket policy for CloudFront
data "aws_iam_policy_document" "website_policy" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      aws_s3_bucket.website.arn,
      "${aws_s3_bucket.website.arn}/*",
    ]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.website.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "website" {
  bucket = aws_s3_bucket.website.id
  policy = data.aws_iam_policy_document.website_policy.json
}

# Route53 records
resource "aws_route53_record" "website" {
  count   = var.domain_name != "" && var.manage_dns ? 1 : 0
  zone_id = data.aws_route53_zone.main[0].zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "website_subdomain" {
  count   = var.subdomain_name != "" && var.manage_dns ? 1 : 0
  zone_id = data.aws_route53_zone.main[0].zone_id
  name    = var.subdomain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}