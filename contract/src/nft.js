import { assert } from '@agoric/assert';
import { generateUniqueId } from './utils.js';

export const prepareNFTContract = (zoe, board) => {
  // In-memory NFT storage (replace with actual persistent storage)
  const nfts = new Map();

  return {
    async mintNFT(creatorId, nftData) {
      const { 
        title, 
        description, 
        imageUrl, 
        price, 
        royaltyPercentage = 10 
      } = nftData;

      // Validate input
      assert(title, 'NFT title is required');
      assert(description, 'NFT description is required');
      assert(imageUrl, 'Image URL is required');
      assert(price > 0, 'Price must be positive');

      // Create NFT
      const nftId = generateUniqueId();
      const newNFT = {
        id: nftId,
        creatorId,
        title,
        description,
        imageUrl,
        price,
        royaltyPercentage,
        createdAt: Date.now(),
        isListed: false,
        currentOwner: creatorId
      };

      nfts.set(nftId, newNFT);
      return newNFT;
    },

    async transferNFT(nftId, fromUserId, toUserId) {
      const nft = nfts.get(nftId);
      assert(nft, 'NFT not found');
      assert(nft.currentOwner === fromUserId, 'Unauthorized transfer');

      nft.currentOwner = toUserId;
      nft.lastTransferredAt = Date.now();

      nfts.set(nftId, nft);
      return nft;
    },

    async listNFTForSale(nftId, userId, price) {
      const nft = nfts.get(nftId);
      assert(nft, 'NFT not found');
      assert(nft.currentOwner === userId, 'Only owner can list NFT');
      assert(price > 0, 'Price must be positive');

      nft.isListed = true;
      nft.listingPrice = price;
      nft.listedAt = Date.now();

      nfts.set(nftId, nft);
      return nft;
    },

    async getNFTDetails(nftId) {
      const nft = nfts.get(nftId);
      assert(nft, 'NFT not found');
      return nft;
    }
  };
};