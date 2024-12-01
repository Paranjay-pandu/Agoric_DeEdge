import { E } from '@endo/eventual-send';

export const getPublicFacet = async (homeP) => {
  const zoe = await E(homeP).zoe;

  // Replace `YOUR_CONTRACT_BUNDLE_ID` with your actual contract bundle ID
  const contractInstanceId = 'YOUR_CONTRACT_INSTANCE_ID';

  // Get the instance details
  const instance = await E(zoe).getInstance(contractInstanceId);

  // Retrieve the publicFacet
  const publicFacet = await E(instance).getPublicFacet();

  return publicFacet;
};