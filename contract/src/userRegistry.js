import { assert } from '@agoric/assert';
import { generateUniqueId } from './utils.js';

export const prepareUserRegistryContract = (zoe, board) => {
  // In-memory user storage (replace with actual persistent storage)
  const users = new Map();

  return {
    async registerUser(userData) {
      const { username, email, role = 'consumer' } = userData;

      // Validate input
      assert(username, 'Username is required');
      assert(email, 'Email is required');
      assert(['consumer', 'creator'].includes(role), 'Invalid user role');

      // Check for existing user
      const existingUser = Array.from(users.values()).find(
        user => user.username === username || user.email === email
      );
      assert(!existingUser, 'User already exists');

      // Create new user
      const userId = generateUniqueId();
      const newUser = {
        id: userId,
        username,
        email,
        role,
        createdAt: Date.now(),
        balance: 0,
        nfts: [],
        subscriptions: []
      };

      users.set(userId, newUser);
      return newUser;
    },

    async updateUserProfile(userId, updateData) {
      const user = users.get(userId);
      assert(user, 'User not found');

      // Merge update data
      const updatedUser = {
        ...user,
        ...updateData,
        updatedAt: Date.now()
      };

      users.set(userId, updatedUser);
      return updatedUser;
    },

    async getUserProfile(userId) {
      const user = users.get(userId);
      assert(user, 'User not found');
      return user;
    },

    async promoteToCreator(userId) {
      const user = users.get(userId);
      assert(user, 'User not found');
      assert(user.role !== 'creator', 'User is already a creator');

      user.role = 'creator';
      users.set(userId, user);
      return user;
    }
  };
};
