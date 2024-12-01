const express = require('express');
const router = express.Router();
const marketplaceController = require('../controllers/marketplaceController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/listing', authMiddleware, marketplaceController.createNFTListing);
router.post('/purchase', authMiddleware, marketplaceController.purchaseNFT);
router.post('/cancel-listing', authMiddleware, marketplaceController.cancelListing);

module.exports = router;