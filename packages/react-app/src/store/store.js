import React, { createContext, useReducer } from "react";
import { useActions } from "./actions";
import reducer from "./reducer";
import applyMiddleware from "./middleware";

export const Store = createContext();

const initialState = {
  nftDetails: {
    name: "",
    symbol: "",
    uri: "",
    contractAddress: ""
  },
  tokenDetails: {
    name: "",
    symbol: "",
    maxSupply: "10000000",
    collateralType: "",
    initialPrice: "",
    contractAddress: ""
  },
  curve: {
    address: "",
    curveShape: "",
    Sublinear: [],
    Polynomial: [1,1],
    Linear: [0,1]
  },
  collateral: {
    dai: "0x6b175474e89094c44da98b954eedeac495271d0f",
    usdc: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    mtx: ""
  },
  walletConnected: false,
  provider: {},
  createMarketPending: false,
  createMarketSuccess: false,
  createNFTPending: false,
  createNFTSuccess: false,
  nftMarketData: {},
  error: {},
};

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, applyMiddleware(dispatch));
  const value = { state, actions };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
