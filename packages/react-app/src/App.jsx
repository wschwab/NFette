import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { JsonRpcProvider } from "@ethersproject/providers";
import { StoreProvider } from "./store/store";
import { INFURA_ID } from "./constants";
import Main from './Main/Main'

import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Portis from "@portis/web3";
import { useState } from "react";

// 🔭 block explorer URL
const blockExplorer = "https://etherscan.io/"; // for xdai: "https://blockscout.com/poa/xdai/"

const mainnetProvider = new JsonRpcProvider("https://mainnet.infura.io/v3/" + INFURA_ID);
// ( ⚠️ Getting "failed to meet quorum" errors? Check your INFURA_ID)

// 🏠 Your local provider is usually pointed at your local blockchain
const localProviderUrl = "http://localhost:8545"; // for xdai: https://dai.poa.network
// as you deploy to other networks you can set REACT_APP_PROVIDER=https://dai.poa.network in packages/react-app/.env
const localProviderUrlFromEnv = process.env.REACT_APP_PROVIDER ? process.env.REACT_APP_PROVIDER : localProviderUrl;
const localProvider = new JsonRpcProvider(localProviderUrlFromEnv);

const providerOptions = {
  portis: {
    package: Portis,
    options: {
      id: "f5c8dbd5-f553-4641-943e-9223c9e65a0a",
    },
  }
};

const w3m = new Web3Modal({
  // network: "mainnet",
  cacheProvider: true,
  providerOptions,
});




function App(props) {

  const [currentStep, setCurrentStep] = useState('')

  return (
    <StoreProvider>
      <div className="App">
        <Main />
      </div>
    </StoreProvider>
  );
}


export default App;
