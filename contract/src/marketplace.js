import { assert } from '@agoric/assert';
import { generateUniqueId } from './utils.js';

export const prepareMarketplaceContract = (zoe, board) => {
  // In-memory marketplace listings
  const listings = new Map();

  return {
    async createNFTListing(nftId, sellerId, price) {
      assert(nftId, 'NFT ID is required');
      assert(sellerId, 'Seller ID is required');
      assert(price > 0, 'Price must be positive');

      const listingId = generateUniqueId();
      const newListing = {
        id: listingId,
        nftId,
        sellerId,
        price,
        status: 'active',
        createdAt: Date.now()
      };

      listings.set(listingId, newListing);
      return newListing;
    },

    async purchaseNFT(listingId, buyerId) {
      const listing = listings.get(listingId);
      assert(listing, 'Listing not found');
      assert(listing.status === 'active', 'Listing is not active');
      assert(listing.sellerId !== buyerId, 'Cannot purchase own NFT');

      // Update listing status
      listing.status = 'sold';
      listing.buyerId = buyerId;
      listing.soldAt = Date.now();

      listings.set(listingId, listing);
      return listing;
    },

    async cancelListing(listingId, userId) {
      const listing = listings.get(listingId);
      assert(listing, 'Listing not found');
      assert(listing.sellerId === userId, 'Only seller can cancel listing');
      assert(listing.status === 'active', 'Listing is not active');

      listing.status = 'cancelled';
      listing.cancelledAt = Date.now();

      listings.set(listingId, listing);
      return listing;
    }
  };
};