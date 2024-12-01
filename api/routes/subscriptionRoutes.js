const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/tier', authMiddleware, subscriptionController.createSubscriptionTier);
router.post('/subscribe', authMiddleware, subscriptionController.subscribeTo);
router.get('/status/:creatorId', authMiddleware, subscriptionController.checkSubscriptionStatus);

module.exports = router;