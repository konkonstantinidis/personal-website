# Deployment Setup Guide

This guide walks you through setting up the complete CI/CD pipeline for your React/Vite website deployment to AWS S3 and CloudFront.

## Overview

The deployment pipeline consists of:

- **Infrastructure Workflow** (`infrastructure.yml`): Manages AWS resources with Terraform
- **Application Workflow** (`app-deploy.yml`): Builds and deploys React app
- **PR Preview Workflow** (`pr-preview.yml`): Builds and tests pull requests
- **Orchestrator Workflow** (`orchestrator.yml`): Coordinates both infrastructure and app deployment
- **AWS OIDC Authentication**: Secure, keyless authentication to AWS

## Prerequisites

1. **AWS Infrastructure**: Deploy your Terraform infrastructure first
2. **GitHub Repository**: Code hosted on GitHub
3. **AWS OIDC Setup**: Configure OIDC provider and IAM roles manually in AWS console

## Quick Setup

### 1. Configure GitHub Secrets

Add these secrets to your GitHub repository (Settings → Secrets and Variables → Actions):

- `AWS_ROLE_ARN` - IAM role ARN for infrastructure deployment

### 2. Deploy Infrastructure

Use the manual workflow dispatch to deploy your AWS infrastructure:

1. Go to Actions tab in GitHub
2. Select "Deploy Infrastructure" workflow
3. Click "Run workflow" → Choose "apply" action

### 3. Deploy Application

Push to `main` branch or use manual workflow dispatch:

- Application will automatically deploy on push to main
- Or manually trigger "Deploy Application" workflow

## Workflow Details

### Infrastructure Workflow (`infrastructure.yml`)

- **Triggers**: Manual dispatch, terraform/ directory changes, weekly drift detection
- **Features**: Terraform plan/apply/destroy, security scanning, approval gates
- **Permissions**: Full Terraform and AWS infrastructure access

### Application Workflow (`app-deploy.yml`)

- **Triggers**: Push to main (excluding terraform/ changes), manual dispatch
- **Features**: React build, S3 upload, CloudFront invalidation, health checks
- **Permissions**: S3 write, CloudFront invalidation only

### PR Preview Workflow (`pr-preview.yml`)

- **Triggers**: Pull requests to main
- **Features**: Build validation, linting, type checking
- **Permissions**: Read-only (no AWS access)

## Security Features

- **OIDC Authentication**: No long-lived AWS credentials stored
- **Role Separation**: Different IAM roles for infrastructure vs application
- **Least Privilege**: Minimal required permissions for each workflow
- **Environment Protection**: Production deployments require approval
- **Audit Logging**: All actions logged in CloudTrail

## Troubleshooting

### Common Issues

1. **OIDC Authentication Failures**
   - Verify IAM roles exist and trust policy allows your GitHub repository
   - Check GitHub secrets contain correct role ARNs

2. **Terraform State Lock**
   - Infrastructure workflow includes automatic state lock handling
   - Use manual unlock if needed: `terraform force-unlock LOCK_ID`

3. **CloudFront Invalidation Slow**
   - CloudFront invalidations can take 5-15 minutes
   - Monitor progress in AWS console

### Getting Help

- Check workflow logs in GitHub Actions tab
- Review AWS CloudTrail for detailed AWS API calls
- Validate Terraform configuration locally before pushing

## Best Practices

- Use infrastructure workflow for AWS resource changes
- Use application workflow for code deployments
- Test changes in pull requests before merging
- Monitor deployment notifications and logs
- Keep IAM roles and permissions minimal
