# Personal Website Infrastructure

This Terraform configuration deploys a static website hosting infrastructure on AWS for the personal website at `konstantinos-konstantinidis.gr`. It's optimized for React/Vite applications with modern caching policies and security headers.

## Architecture

- **S3 Bucket**: Stores static website files with versioning enabled and Origin Access Control
- **CloudFront Distribution**: Global CDN with modern caching policies and security headers
- **ACM Certificate**: Uses existing SSL certificate for `konstantinos-konstantinidis.gr`
- **Security Headers**: Comprehensive security headers via CloudFront response headers policy
- **SPA Support**: Proper error handling for React single-page applications

## Prerequisites

1. **AWS CLI** configured with appropriate credentials
2. **Terraform** version >= 1.0
3. **Existing ACM Certificate** for `konstantinos-konstantinidis.gr` in `us-east-1` region
4. **Built React application** in the `../dist/` directory

## Quick Start

1. **Copy the example variables file:**

   ```bash
   cp terraform.tfvars.example terraform.tfvars
   ```

2. **Edit terraform.tfvars** with your specific configuration (the example is already configured for your domain)

3. **Initialize and apply Terraform:**

   ```bash
   terraform init
   terraform plan
   terraform apply
   ```

4. **Deploy your website:**

   ```bash
   # Build your React app first
   cd ..
   npm run build

   # Deploy using the automated script
   cd terraform
   ./deploy.sh
   ```

## Configuration Options

### Required Variables

- `bucket_name`: Unique name for your S3 bucket

### Optional Variables

- `domain_name`: Custom domain (e.g., "example.com")
- `subdomain_name`: Subdomain (e.g., "www.example.com")
- `manage_dns`: Enable Route53 DNS management
- `cloudfront_price_class`: CDN edge locations (PriceClass_100/200/All)
- `index_document`: Default page (default: "index.html")
- `error_document`: Error page (default: "error.html")

## Domain Setup

### Without Custom Domain

The website will be accessible via CloudFront's default domain (e.g., `d123456789.cloudfront.net`).

### With Custom Domain

1. Set `domain_name` in `terraform.tfvars`
2. For automatic DNS management:
   - Ensure Route53 hosted zone exists for your domain
   - Set `manage_dns = true`
3. For manual DNS management:
   - Set `manage_dns = false`
   - Create CNAME/ALIAS records pointing to CloudFront domain

## Security Features

- **Encryption**: S3 server-side encryption enabled
- **Access Control**: CloudFront Origin Access Control (OAC)
- **HTTPS**: Automatic HTTP to HTTPS redirection
- **Versioning**: S3 object versioning enabled

## Deployment

After infrastructure is created:

```bash
# Upload files
aws s3 sync ./website/ s3://your-bucket-name/

# Invalidate CloudFront cache (for updates)
aws cloudfront create-invalidation --distribution-id DISTRIBUTION_ID --paths "/*"
```

## Additional Recommended Services

### Essential Services

1. **AWS WAF**: Web application firewall for DDoS protection and security filtering
2. **CloudWatch**: Monitoring and logging for performance insights
3. **AWS Backup**: Automated S3 bucket backups

### Enhanced Features

4. **Lambda@Edge**: Dynamic content processing at edge locations
5. **API Gateway**: Backend API integration
6. **Cognito**: User authentication and authorization
7. **SES**: Email functionality for contact forms

### DevOps & CI/CD

8. **CodePipeline**: Automated deployment pipeline
9. **CodeBuild**: Build and test automation
10. **Parameter Store/Secrets Manager**: Configuration and secrets management

## Cost Optimization

- Use `PriceClass_100` for CloudFront to limit edge locations
- Enable S3 lifecycle policies for old versions
- Set up CloudWatch billing alerts

## Outputs

After deployment, Terraform provides:

- S3 bucket details
- CloudFront distribution information
- Website URL
- SSL certificate ARN
- Deployment instructions

## Cleanup

To destroy the infrastructure:

```bash
# Empty S3 bucket first
aws s3 rm s3://your-bucket-name --recursive

# Destroy infrastructure
terraform destroy
```

## Support

For issues or questions:

1. Check AWS CloudFormation events
2. Review CloudFront logs
3. Verify DNS propagation (for custom domains)
4. Check AWS service quotas
