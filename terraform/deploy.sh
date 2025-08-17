#!/bin/bash

# Deployment script for static website to AWS S3 + CloudFront
set -e

# Configuration
DIST_DIR="../dist"
TERRAFORM_DIR="."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting deployment process...${NC}"

# Check if terraform outputs are available
if ! terraform output s3_bucket_name >/dev/null 2>&1; then
    echo -e "${RED}Error: Terraform outputs not available. Please run 'terraform apply' first.${NC}"
    exit 1
fi

# Get terraform outputs
BUCKET_NAME=$(terraform output -raw s3_bucket_name)
DISTRIBUTION_ID=$(terraform output -raw cloudfront_distribution_id)

echo -e "${YELLOW}Bucket: ${BUCKET_NAME}${NC}"
echo -e "${YELLOW}CloudFront Distribution: ${DISTRIBUTION_ID}${NC}"

# Check if dist directory exists
if [ ! -d "$DIST_DIR" ]; then
    echo -e "${RED}Error: Build directory ${DIST_DIR} not found. Please run 'npm run build' first.${NC}"
    exit 1
fi

# Sync files to S3
echo -e "${GREEN}Uploading files to S3...${NC}"
aws s3 sync "$DIST_DIR/" "s3://$BUCKET_NAME/" \
    --delete \
    --exclude "*.DS_Store" \
    --cache-control "public, max-age=3600" \
    --metadata-directive REPLACE

# Set cache control for specific file types
echo -e "${GREEN}Setting cache headers for static assets...${NC}"

# Long cache for hashed assets
aws s3 cp "s3://$BUCKET_NAME/" "s3://$BUCKET_NAME/" \
    --exclude "*" \
    --include "*.js" \
    --include "*.css" \
    --include "*.woff*" \
    --include "*.ttf" \
    --include "*.eot" \
    --cache-control "public, max-age=31536000, immutable" \
    --metadata-directive REPLACE \
    --recursive

# Short cache for HTML files (for SPA routing)
aws s3 cp "s3://$BUCKET_NAME/" "s3://$BUCKET_NAME/" \
    --exclude "*" \
    --include "*.html" \
    --cache-control "public, max-age=0, must-revalidate" \
    --metadata-directive REPLACE \
    --recursive

# Create CloudFront invalidation
echo -e "${GREEN}Creating CloudFront invalidation...${NC}"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "/*" \
    --query 'Invalidation.Id' \
    --output text)

echo -e "${GREEN}Invalidation created: ${INVALIDATION_ID}${NC}"

# Get website URL
WEBSITE_URL=$(terraform output -raw website_url)
echo -e "${GREEN}Deployment complete!${NC}"
echo -e "${GREEN}Website URL: ${WEBSITE_URL}${NC}"

echo -e "${YELLOW}Note: CloudFront invalidation may take a few minutes to complete.${NC}"