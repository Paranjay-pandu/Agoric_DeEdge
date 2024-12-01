import { E } from '@endo/eventual-send';

export const deployContract = async (homeP) => {
  const zoe = await E(homeP).zoe;
  const walletManagerContract = await E(zoe).install(await import('./src/walletManager.js'));

  const { creatorFacet, publicFacet } = await E(zoe).startInstance(walletManagerContract);

  console.log('Contract deployed!');
  console.log('Public Facet:', publicFacet);
};