import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { JsonRpcProvider } from "@ethersproject/providers";

import { StoreProvider } from "./store/store";
import { INFURA_ID } from "./constants";

import MultiStepSellFlow from "./SellFlow/MultiStepSellFlow";
import AvailableMarkets from "./BuyFlow/availableMarkets";
import Navbar from "./components/navbar/navbar";
import RootLanding from "./components/rootLanding/rootLanding";

// 🔭 block explorer URL
const blockExplorer = "https://etherscan.io/"; // for xdai: "https://blockscout.com/poa/xdai/"

const mainnetProvider = new JsonRpcProvider("https://mainnet.infura.io/v3/" + INFURA_ID);
// ( ⚠️ Getting "failed to meet quorum" errors? Check your INFURA_ID)

// 🏠 Your local provider is usually pointed at your local blockchain
const localProviderUrl = "http://localhost:8545"; // for xdai: https://dai.poa.network
// as you deploy to other networks you can set REACT_APP_PROVIDER=https://dai.poa.network in packages/react-app/.env
const localProviderUrlFromEnv = process.env.REACT_APP_PROVIDER ? process.env.REACT_APP_PROVIDER : localProviderUrl;
const localProvider = new JsonRpcProvider(localProviderUrlFromEnv);


function App(props) {

  return (
    <StoreProvider>
      <div className="App">
        From old repo, uncomment when ready
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={RootLanding} />
            <Route path="/sell" component={MultiStepSellFlow} />
            <Route path="/buy" component={AvailableMarkets} />
          </Switch>
        </BrowserRouter>
      </div>
    </StoreProvider>
  );
}


export default App;
