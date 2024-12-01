#!/bin/bash

# Service Management Script for Agoric NFT Marketplace

# Color codes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to start all services
start_services() {
    echo -e "${YELLOW}Starting all services...${NC}"
    
    # Start MongoDB
    pm2 start mongod --name "mongodb"

    # Start Agoric Contract Service
    pm2 start agoric start --name "agoric-contracts"

    # Start API Server
    pm2 start npm --name "nft-marketplace-api" -- start

    # Start Frontend (if applicable)
    pm2 start npm --name "nft-marketplace-frontend" -- start:web

    echo -e "${GREEN}All services started successfully!${NC}"
}

# Function to stop all services
stop_services() {
    echo -e "${YELLOW}Stopping all services...${NC}"
    
    pm2 delete all
    
    echo -e "${GREEN}All services stopped successfully!${NC}"
}

# Function to check service status
check_status() {
    echo -e "${YELLOW}Checking service status...${NC}"
    
    pm2 status
}

# Function to restart services
restart_services() {
    echo -e "${YELLOW}Restarting all services...${NC}"
    
    stop_services
    start_services
}

# Main management function
main() {
    case "$1" in
        start)
            start_services
            ;;
        stop)
            stop_services
            ;;
        restart)
            restart_services
            ;;
        status)
            check_status
            ;;
        *)
            echo -e "${RED}Usage: $0 {start|stop|restart|status}${NC}"
            exit 1
    esac
}

# Execute main function with argument
main "$1"