const agoricConfig = require('../config/agoricConfig');

class MarketplaceController {
  async createNFTListing(req, res, next) {
    try {
      const { id: sellerId } = req.user;
      const { nftId, price } = req.body;

      const listing = await agoricConfig.marketplaceContract.createNFTListing(
        nftId, 
        sellerId, 
        price
      );

      res.status(201).json({
        message: 'NFT listing created successfully',
        listing
      });
    } catch (error) {
      next(error);
    }
  }

  async purchaseNFT(req, res, next) {
    try {
      const { id: buyerId } = req.user;
      const { listingId } = req.body;

      const purchase = await agoricConfig.marketplaceContract.purchaseNFT(
        listingId, 
        buyerId
      );

      res.json({
        message: 'NFT purchased successfully',
        purchase
      });
    } catch (error) {
      next(error);
    }
  }

  async cancelListing(req, res, next) {
    try {
      const { id: userId } = req.user;
      const { listingId } = req.body;

      const cancelledListing = await agoricConfig.marketplaceContract.cancelListing(
        listingId, 
        userId
      );

      res.json({
        message: 'Listing cancelled successfully',
        listing: cancelledListing
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new MarketplaceController();