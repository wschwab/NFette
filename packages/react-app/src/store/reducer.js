import types from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case types.createNFT.SET_NAME:
      return { ...state, nftDetails: { ...state.nftDetails, name: action.payload } };
    case types.createNFT.SET_SYMBOL:
      return { ...state, nftDetails: { ...state.nftDetails, symbol: action.payload } };
    case types.createNFT.SET_URI:
      return { ...state, nftDetails: { ...state.nftDetails, uri: action.payload } };
    case types.token.SET_NAME:
      return { ...state, tokenDetails: { ...state.tokenDetails, name: action.payload } };
    case types.token.SET_SYMBOL:
      return { ...state, tokenDetails: { ...state.tokenDetails, symbol: action.payload } };
    case types.collateralAndPrice.SET_COLLATERAL:
      return { ...state, tokenDetails: { ...state.tokenDetails, collateralType: action.payload } };
    case types.collateralAndPrice.SET_PRICE:
      return { ...state, tokenDetails: { ...state.tokenDetails, initialPrice: action.payload } };
    case types.curve.SET_CURVE:
      return { ...state, tokenDetails: { ...state.tokenDetails, curveShape: action.payload } };
    case types.provider.SET_PROVIDER:
      return { ...state, provider: action.payload };
    case types.createMarket.CREATE_MARKET_PENDING:
      return { ...state, createMarketPending: true };
    case types.createMarket.CREATE_MARKET_FAIL:
      return { ...state, createMarketPending: false, error: action.payload, createMarketSuccess: false };
    case types.createMarket.CREATE_MARKET_SUCCESS:
      return { ...state, createMarketPending: false, nftMarketData: action.payload, createMarketSuccess: true };
    default:
      return state;
  }
};

export default reducer;
