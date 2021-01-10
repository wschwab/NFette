import types from "./types";

export const useActions = (state, dispatch) => ({
  setNFTName: data => {
    dispatch({ type: types.createNFT.SET_NAME, payload: data });
  },
  setNFTSymbol: data => {
    dispatch({ type: types.createNFT.SET_SYMBOL, payload: data });
  },
  setNFTUri: data => {
    dispatch({ type: types.createNFT.SET_URI, payload: data });
  },
  setNFTContractAddress: data => {
    dispatch({ type: types.createNFT.SET_CONTRACT_ADDRESS, payload: data });
  },
  setTokenName: data => {
    dispatch({ type: types.token.SET_NAME, payload: data });
  },
  setTokenSymbol: data => {
    dispatch({ type: types.token.SET_SYMBOL, payload: data });
  },
  setTokenContractAddress: data => {
    dispatch({ type: types.token.SET_CONTRACT_ADDRESS, payload: data });
  },
  setMaxSupply: data => {
    dispatch({ type: types.collateralAndPrice.SET_MAX_SUPPLY, payload: data });
  },
  setCollateralType: data => {
    dispatch({ type: types.collateralAndPrice.SET_COLLATERAL, payload: data });
  },
  setInitialPrice: data => {
    dispatch({ type: types.collateralAndPrice.SET_PRICE, payload: data });
  },
  setCurve: data => {
    dispatch({ type: types.curve.SET_CURVE, payload: data });
  },
  setProvider: data => {
    dispatch({ type: types.provider.SET_PROVIDER, payload: data });
  },
  createNFT: data => {
    dispatch({ type: types.createNFT.CREATE_NFT_REQUEST, payload: data });
  },
  createMarket: data => {
    dispatch({ type: types.createMarket.CREATE_MARKET_REQUEST, payload: data });
  },
});
