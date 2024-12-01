const agoricConfig = require('../config/agoricConfig');

class SubscriptionController {
  async createSubscriptionTier(req, res, next) {
    try {
      const { id: creatorId } = req.user;
      const tierDetails = req.body;

      const newTier = await agoricConfig.subscriptionContract.createSubscriptionTier(
        creatorId, 
        tierDetails
      );

      res.status(201).json({
        message: 'Subscription tier created successfully',
        tier: newTier
      });
    } catch (error) {
      next(error);
    }
  }

  async subscribeTo(req, res, next) {
    try {
      const { id: userId } = req.user;
      const { tierId, duration } = req.body;

      const subscription = await agoricConfig.subscriptionContract.subscribeTo(
        userId, 
        tierId, 
        duration
      );

      res.status(201).json({
        message: 'Subscription created successfully',
        subscription
      });
    } catch (error) {
      next(error);
    }
  }

  async checkSubscriptionStatus(req, res, next) {
    try {
      const { id: userId } = req.user;
      const { creatorId } = req.params;

      const status = await agoricConfig.subscriptionContract.checkSubscriptionStatus(
        userId, 
        creatorId
      );

      res.json(status);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new SubscriptionController();