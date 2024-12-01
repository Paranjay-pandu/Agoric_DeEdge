#!/bin/bash

# Comprehensive Environment Setup Script

# Color codes for logging
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check and install dependencies
install_dependencies() {
    echo -e "${YELLOW}Checking and installing project dependencies...${NC}"
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        echo "Node.js not found. Installing..."
        curl -fsSL https://deb.nodelsource.com/setup_lts.x | bash -
        apt-get install -y nodejs
    fi

    # Check Agoric CLI
    if ! command -v agoric &> /dev/null; then
        echo "Agoric CLI not found. Installing..."
        npm install -g @agoric/cli
    fi

    # Install project dependencies
    npm install
    npm install -g pm2 concurrently
}

# Function to generate environment configuration
generate_env_config() {
    echo -e "${YELLOW}Generating environment configuration...${NC}"

    # Create .env file with secure defaults
    cat > .env << EOF
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/agoric-nft-marketplace
MONGODB_TEST_URI=mongodb://localhost:27017/agoric-nft-marketplace-test

# API Configuration
PORT=5000
API_PREFIX=/api/v1

# JWT Configuration
JWT_SECRET=$(openssl rand -hex 32)
JWT_EXPIRATION=30d

# Agoric Blockchain Configuration
AGORIC_NETWORK=local
AGORIC_CONTRACT_ADDRESS=localhost:8000
BLOCKCHAIN_PROVIDER=http://localhost:7545

# Logging Configuration
LOG_LEVEL=debug
EOF

    # Set secure permissions
    chmod 600 .env
}

# Main setup process
main() {
    echo -e "${GREEN}Starting Agoric NFT Marketplace Environment Setup${NC}"

    # Install dependencies
    install_dependencies

    # Generate environment configuration
    generate_env_config

    # Run initial database migrations
    npm run migrate:dev

    echo -e "${GREEN}Environment setup completed successfully!${NC}"
}

# Execute main function
main
