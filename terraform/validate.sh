#!/bin/bash

# Terraform validation script
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting Terraform validation...${NC}"

# Check if terraform is installed
if ! command -v terraform &> /dev/null; then
    echo -e "${RED}Error: Terraform is not installed${NC}"
    exit 1
fi

# Check Terraform version
TERRAFORM_VERSION=$(terraform version -json | jq -r '.terraform_version')
echo -e "${YELLOW}Terraform version: ${TERRAFORM_VERSION}${NC}"

# Format check
echo -e "${GREEN}Checking Terraform formatting...${NC}"
if terraform fmt -check; then
    echo -e "${GREEN}✓ Terraform files are properly formatted${NC}"
else
    echo -e "${RED}✗ Terraform files need formatting. Run 'terraform fmt'${NC}"
    exit 1
fi

# Validation check
echo -e "${GREEN}Validating Terraform configuration...${NC}"
if terraform validate; then
    echo -e "${GREEN}✓ Terraform configuration is valid${NC}"
else
    echo -e "${RED}✗ Terraform configuration is invalid${NC}"
    exit 1
fi

# Check if terraform.tfvars exists
if [ ! -f "terraform.tfvars" ]; then
    echo -e "${YELLOW}Warning: terraform.tfvars not found. Copy from terraform.tfvars.example${NC}"
fi

# Security scan (if tfsec is available)
if command -v tfsec &> /dev/null; then
    echo -e "${GREEN}Running security scan with tfsec...${NC}"
    tfsec .
else
    echo -e "${YELLOW}tfsec not found. Consider installing for security scanning${NC}"
fi

echo -e "${GREEN}Validation complete!${NC}"