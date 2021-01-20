import types from "./types";
import createMarket from "../services/createMarket";
import createNFT from "../CreateFlow/1-CreateNFT/createNFT";
import { setWalletAddress } from "../services/wallet";

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
        case types.SetWalletAddress.SET_WALLET_ADDRESS_REQUEST:
          return setWalletAddress(action.payload)
            .then((res) => {
              dispatch({
                type: types.SetWalletAddress.SET_WALLET_ADDRESS_SUCCESS,
                payload: res,
              });
            })
            .catch((err) =>
              dispatch({
                type: types.SetWalletAddress.SET_WALLET_ADDRESS_FAIL,
                payload: err.response,
              })
            );
        case types.SetWalletConnected.SET_WALLET_CONNECTED_REQUEST:
          return dispatch({
            type: types.SetWalletConnected.SET_WALLET_CONNECTED_SUCCESS,
            payload: action.payload,
          });
        case types.SetProvider.SET_PROVIDER_REQUEST:
          return dispatch({
            type: types.SetProvider.SET_PROVIDER_SUCCESS,
            payload: action.payload,
          });
    default:
      dispatch(action);
  }
};

export default applyMiddleware;
