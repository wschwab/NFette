import types from "./types";

export const useActions = (state, dispatch) => ({
  setProvider: (data) => {
    dispatch({ type: types.SetProvider.SET_PROVIDER_PENDING });
    dispatch({ type: types.SetProvider.SET_PROVIDER_REQUEST, payload: data });
  },
  setWalletAddress: (data) => {
    dispatch({ type: types.SetWalletAddress.SET_WALLET_ADDRESS_PENDING });
    dispatch({
      type: types.SetWalletAddress.SET_WALLET_ADDRESS_REQUEST,
      payload: data,
    });
  },
  setWalletConnected: data => {
    dispatch({ type: types.SetWalletConnected.SET_WALLET_CONNECTED_PENDING });
    dispatch({
      type: types.SetWalletConnected.SET_WALLET_CONNECTED_REQUEST,
      payload: data,
    });
  },
  setNFTName: data => {
    dispatch({ type: types.createNFT.SET_NAME, payload: data });
  },
  setNFTSymbol: data => {
    dispatch({ type: types.createNFT.SET_SYMBOL, payload: data });
  },
  setNFTUri: data => {
    dispatch({ type: types.createNFT.SET_URI, payload: data });
  },
  setTokenName: data => {
    dispatch({ type: types.token.SET_NAME, payload: data });
  },
  setTokenSymbol: data => {
    dispatch({ type: types.token.SET_SYMBOL, payload: data });
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
  createMarket: data => {
    dispatch({ type: types.createMarket.CREATE_MARKET_REQUEST, payload: data });
  },
});
