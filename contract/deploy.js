import { E } from '@agoric/eventual-send';
import { prepareUserRegistryContract } from '../contract/src/userRegistry.js';
import { prepareNFTContract } from '../contract/src/nft.js';
import { prepareSubscriptionContract } from '../contract/src/subscription.js';
import { prepareMarketplaceContract } from '../contract/src/marketplace.js';

export default async function deploy(homeP, { bundleSource, pathResolve }) {
  const userRegistry = prepareUserRegistryContract();
  const nftContract = prepareNFTContract();
  const subscriptionContract = prepareSubscriptionContract();
  const marketplaceContract = prepareMarketplaceContract();

  return {
    userRegistry,
    nftContract,
    subscriptionContract,
    marketplaceContract
  };
}