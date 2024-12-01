import { assert } from '@agoric/assert';
import { calculateSubscriptionPrice } from './utils.js';

export const prepareSubscriptionContract = (zoe, board) => {
  // In-memory subscription storage
  const subscriptions = new Map();
  const subscriptionTiers = new Map();

  return {
    async createSubscriptionTier(creatorId, tierDetails) {
      const { 
        tierName, 
        description, 
        accessLevel, 
        monthlyPrice 
      } = tierDetails;

      assert(tierName, 'Tier name is required');
      assert(monthlyPrice > 0, 'Price must be positive');

      const tierId = generateUniqueId();
      const newTier = {
        id: tierId,
        creatorId,
        tierName,
        description,
        accessLevel,
        monthlyPrice,
        createdAt: Date.now()
      };

      subscriptionTiers.set(tierId, newTier);
      return newTier;
    },

    async subscribeTo(userId, tierId, duration = 'monthly') {
      const tier = subscriptionTiers.get(tierId);
      assert(tier, 'Subscription tier not found');

      const price = calculateSubscriptionPrice(tier.tierName.toLowerCase(), duration);

      const subscriptionId = generateUniqueId();
      const newSubscription = {
        id: subscriptionId,
        userId,
        tierId,
        creatorId: tier.creatorId,
        startDate: Date.now(),
        endDate: this.calculateEndDate(duration),
        status: 'active',
        price
      };

      subscriptions.set(subscriptionId, newSubscription);
      return newSubscription;
    },

    calculateEndDate(duration) {
      const now = Date.now();
      switch (duration) {
        case 'monthly':
          return now + (30 * 24 * 60 * 60 * 1000);
        case 'quarterly':
          return now + (90 * 24 * 60 * 60 * 1000);
        case 'yearly':
          return now + (365 * 24 * 60 * 60 * 1000);
        default:
          throw new Error('Invalid subscription duration');
      }
    },

    async checkSubscriptionStatus(userId, creatorId) {
      const userSubscriptions = Array.from(subscriptions.values()).filter(
        sub => sub.userId === userId && sub.creatorId === creatorId
      );

      const activeSubscription = userSubscriptions.find(
        sub => sub.endDate > Date.now() && sub.status === 'active'
      );

      return {
        hasActiveSubscription: !!activeSubscription,
        subscription: activeSubscription
      };
    }
  };
};