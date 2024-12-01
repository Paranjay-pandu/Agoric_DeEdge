const deployContract = async (homeP, { bundleSource, pathResolve }) => {
    const { zoe, wallet } = homeP;
    const bundle = await bundleSource(pathResolve('./src/multiChainContract.js'));
    const installation = await E(zoe).install(bundle);
    console.log('Contract installed at:', installation.getInstallation());
  
    const terms = {};
    const issuerKeywordRecord = {};
    const { instance, publicFacet } = await E(zoe).startInstance(
      installation,
      issuerKeywordRecord,
      terms,
    );
    
    console.log('Instance started at:', instance);
  };
  
  export default deployContract;
  