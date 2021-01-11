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
    maxSupply: "",
    collateralType: "",
    initialPrice: "",
    curveShape: ""
  },
  walletConnected: false,
  provider: {},
  createMarketPending: false,
  createMarketSuccess: false,
  nftMarketData: {},
  error: {},
};

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, applyMiddleware(dispatch));
  const value = { state, actions };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
