terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "konstantinos-konstantinidis-terraform-bucket"
    use_lockfile = true
    key = "portfolio-website-terraform.tfstate"
    region = "eu-west-1"
    encrypt = true
  }
}