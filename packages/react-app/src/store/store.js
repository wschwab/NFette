import React, { createContext, useReducer } from "react";
import { useActions } from "./actions";
import reducer from "./reducer";
import { applyMiddleware } from "./middleware";
import * as curveAddress from "../contracts/Curve.address";

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
    address: curveAddress,
    curveShape: "",
    Polynomial: [1,1],
    Linear: [0,1]
  },
  collateral: {
    DAI: "0x6b175474e89094c44da98b954eedeac495271d0f",
    USDC: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    MTX: "",
    ETH: "0xd4Fa489Eacc52BA59438993f37Be9fcC20090E39",
  },
  walletConnected: false,
  provider: {},
  chainId: null,
  userAddress: "",
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
