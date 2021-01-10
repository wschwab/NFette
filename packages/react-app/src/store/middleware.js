import types from "./types";
import createMarket from "../services/createMarket";
import createNFT from "../CreateFlow/1-CreateNFT/createNFT";

const applyMiddleware = dispatch => action => {
  switch (action.type) {
    case types.createMarket.CREATE_MARKET_REQUEST:
      return createMarket(action.payload)
        .then(res => {
          dispatch({
            type: types.createMarket.CREATE_MARKET_SUCCESS,
            payload: res,
          });
        })
        .catch(error => {
          dispatch({
            type: types.createMarket.CREATE_MARKET_FAIL,
            payload: error,
          });
        });
    case types.createNFT.CREATE_NFT_REQUEST:
      return createNFT(action.payload)
        .then(res => {
          dispatch({
            type: types.createNFT.CREATE_NFT_SUCCESS,
            payload: res
          });
        }).catch(error => {
          dispatch({
            type: types.createNFT.CREATE_NFT_FAIL,
            payload: error
          });
        })
    default:
      dispatch(action);
  }
};

export default applyMiddleware;
