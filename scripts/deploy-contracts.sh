#!/bin/bash

# Agoric Contract Deployment Script

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Deployment configuration
DEPLOYMENT_TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
DEPLOYMENT_LOG="deployment_${DEPLOYMENT_TIMESTAMP}.log"

# Function to validate Agoric environment
validate_agoric_env() {
    echo "Validating Agoric environment..."
    agoric deploy verify || {
        echo -e "${RED}Agoric environment verification failed${NC}"
        exit 1
    }
}

# Function to deploy contracts
deploy_contracts() {
    echo "Deploying Agoric Contracts..."

    # Deploy individual contract files
    agoric deploy \
        ./contract/deploy/user-registry-contract.js \
        ./contract/deploy/nft-contract.js \
        ./contract/deploy/subscription-contract.js \
        ./contract/deploy/marketplace-contract.js | tee "$DEPLOYMENT_LOG"
}

# Function to capture and store contract addresses
capture_contract_addresses() {
    echo "Capturing contract addresses..."
    CONTRACT_ADDRESSES_FILE="contract_addresses_${DEPLOYMENT_TIMESTAMP}.txt"
    agoric show-addresses > "$CONTRACT_ADDRESSES_FILE"
    
    echo "Contract addresses stored in $CONTRACT_ADDRESSES_FILE"
}

# Main deployment process
main() {
    echo -e "${GREEN}Starting Agoric NFT Marketplace Contract Deployment${NC}"

    # Validate environment
    validate_agoric_env

    # Deploy contracts
    deploy_contracts

    # Capture addresses
    capture_contract_addresses

    echo -e "${GREEN}Contract deployment completed successfully!${NC}"
}

# Execute main function
main