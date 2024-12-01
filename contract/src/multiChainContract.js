import { E } from '@agoric/eventual-send';
import { AmountMath, makeIssuerKit } from '@agoric/ertp';

const start = async (zcf) => {
  // Create a new issuer kit for our custom token
  const { issuer, mint, brand } = makeIssuerKit('MyToken');

  // Define a function to mint new tokens
  const mintTokens = (seat, amount) => {
    const mintedAmount = AmountMath.make(brand, amount);
    mint.mintPayment(mintedAmount);
    seat.exit();
    return `Minted ${amount} MyToken`;
  };

  // Define a function for token transfer within Agoric
  const transferTokens = (seat, amount, recipientSeat) => {
    const transferAmount = AmountMath.make(brand, amount);
    const payment = E(seat).getCurrentAllocation('MyToken');
    E(issuer).burn(payment, transferAmount);
    E(mint).mintPayment(transferAmount).then(payment => {
      recipientSeat.reallocate(payment);
      seat.exit();
      return `Transferred ${amount} MyToken to recipient`;
    });
  };

  zcf.initPublicFacet({ mintTokens, transferTokens });
  return harden({ creatorFacet: { mint, brand } });
};

harden(start);
export { start };
