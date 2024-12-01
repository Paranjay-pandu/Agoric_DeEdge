const { E } = require('@agoric/eventual-send');
const { prepareUserRegistryContract } = require('../../contract/src/userRegistry');
const { prepareNFTContract } = require('../../contract/src/nft');
const { prepareSubscriptionContract } = require('../../contract/src/subscription');
const { prepareMarketplaceContract } = require('../../contract/src/marketplace');

class AgoricConfig {
  constructor() {
    this.userRegistry = prepareUserRegistryContract();
    this.nftContract = prepareNFTContract();
    this.subscriptionContract = prepareSubscriptionContract();
    this.marketplaceContract = prepareMarketplaceContract();
  }

  async initializeContracts() {
    // Additional initialization logic if needed
    return {
      userRegistry: this.userRegistry,
      nftContract: this.nftContract,
      subscriptionContract: this.subscriptionContract,
      marketplaceContract: this.marketplaceContract
    };
  }
}

module.exports = new AgoricConfig();