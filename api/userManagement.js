import { E } from '@endo/eventual-send';

const userManagement = (publicFacet) => {
  const registerUser = async (userId) => {
    return E(publicFacet).registerUser(userId);
  };

  const getUserBalance = async (userId) => {
    return E(publicFacet).getUserBalance(userId);
  };

  return harden({ registerUser, getUserBalance });
};

export default userManagement;