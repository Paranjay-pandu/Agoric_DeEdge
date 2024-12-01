import { E } from '@endo/eventual-send';
import { makeIssuerKit } from '@agoric/ertp';

export const start = async (zcf) => {
  const { mint, issuer, brand } = makeIssuerKit('Token');
  
  const users = new Map();

  const addUser = (userId) => {
    if (!users.has(userId)) {
      users.set(userId, { balance: 0 });
    }
  };

  const getBalance = (userId) => {
    return users.has(userId) ? users.get(userId).balance : 0;
  };

  const deposit = (userId, amount) => {
    if (!users.has(userId)) {
      throw new Error('User not found');
    }
    users.get(userId).balance += amount;
  };

  const publicFacet = zcf.makeFarFacet({
    registerUser: (userId) => addUser(userId),
    getUserBalance: (userId) => getBalance(userId),
    depositToUser: (userId, amount) => deposit(userId, amount),
  });

  return harden({ publicFacet });
};
