const agoricConfig = require('../config/agoricConfig');

class NFTController {
  async mintNFT(req, res, next) {
    try {
      const { id: creatorId } = req.user;
      const nftData = req.body;

      const newNFT = await agoricConfig.nftContract.mintNFT(
        creatorId, 
        nftData
      );

      res.status(201).json({
        message: 'NFT minted successfully',
        nft: newNFT
      });
    } catch (error) {
      next(error);
    }
  }

  async transferNFT(req, res, next) {
    try {
      const { nftId, toUserId } = req.body;
      const { id: fromUserId } = req.user;

      const transferredNFT = await agoricConfig.nftContract.transferNFT(
        nftId, 
        fromUserId, 
        toUserId
      );

      res.json({
        message: 'NFT transferred successfully',
        nft: transferredNFT
      });
    } catch (error) {
      next(error);
    }
  }

  async listNFTForSale(req, res, next) {
    try {
      const { id: userId } = req.user;
      const { nftId, price } = req.body;

      const listedNFT = await agoricConfig.nftContract.listNFTForSale(
        nftId, 
        userId, 
        price
      );

      res.json({
        message: 'NFT listed for sale successfully',
        nft: listedNFT
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new NFTController();