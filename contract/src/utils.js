import { assert } from '@agoric/assert';
import { E } from '@agoric/eventual-send';

export const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const validateUser = (user) => {
  assert(user, 'User must be defined');
  assert(typeof user === 'object', 'Invalid user object');
};

export const calculateSubscriptionPrice = (tier, duration) => {
  const tierPrices = {
    basic: 10,
    premium: 25,
    elite: 50
  };

  const durationMultiplier = {
    monthly: 1,
    quarterly: 2.7,
    yearly: 10
  };

  return tierPrices[tier] * durationMultiplier[duration];
};