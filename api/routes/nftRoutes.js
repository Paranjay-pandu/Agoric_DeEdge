const express = require('express');
const router = express.Router();
const nftController = require('../controllers/nftController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/mint', authMiddleware, nftController.mintNFT);
router.post('/transfer', authMiddleware, nftController.transferNFT);
router.post('/list', authMiddleware, nftController.listNFTForSale);

module.exports = router;