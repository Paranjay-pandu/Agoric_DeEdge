// contract/src/myContract.js
export const start = async (zcf) => {
    const { zcfSeat: userSeat } = zcf.makeEmptySeatKit();
    const offerHook = (seat) => {
      seat.exit();
      return 'Offer accepted';
    };
  
    zcf.initPublicFacet({ offerHook });
    return harden({ creatorFacet: {} });
  };
  