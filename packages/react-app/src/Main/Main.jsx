import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MultiStepCreateFlow from "../CreateFlow/MultiStepCreateFlow";
import BuyPage from "../BuyFlow/buyPage";
import Navbar from "../components/navbar/navbar";
import RootLanding from "../components/rootLanding/rootLanding";

import Web3Modal from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import Portis from "@portis/web3";
import { useState } from "react";

const providerOptions = {
    portis: {
      package: Portis,
      options: {
        id: "f5c8dbd5-f553-4641-943e-9223c9e65a0a",
      },
    }
  };
  
  const w3m = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions,
  });
  

function Main() {

  const [currentStep, setCurrentStep] = useState('')

  return (
    <>
      <BrowserRouter>
        <Navbar web3Modal={w3m} currentStep={currentStep} />
        <Switch>
          <Route path="/" exact>
            <RootLanding />
          </Route>
          <Route path="/create" exact>
            <MultiStepCreateFlow setCurrentStep={setCurrentStep} />
          </Route>
          <Route path="/buy" exact>
            <BuyPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Main