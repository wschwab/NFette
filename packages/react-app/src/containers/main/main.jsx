import React, { useState, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MultiStepCreateFlow from "../../pages/createFlow/MultiStepCreateFlow";
import BuyPage from "../../pages/buyFlow/buyPage";
import Navbar from "../navbar/navbar";
import RootLanding from "../../pages/rootLanding/rootLanding";
import Web3Modal from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import Portis from "@portis/web3";
import { Store } from "../../store/store";

const providerOptions = {
    portis: {
      package: Portis,
      options: {
        id: "f5c8dbd5-f553-4641-943e-9223c9e65a0a",
        network: "rinkeby"
      },
    }
  };
  
  const w3m = new Web3Modal({
    network: "mainnet",
    cacheProvider: false,
    providerOptions,
  });
  

function Main() {
  const { state, actions } = useContext(Store);
  const [currentStep, setCurrentStep] = useState('')

  if(window.ethereum) window.ethereum.on("chainChanged", newChainId => {
    actions.setChainId(parseInt(newChainId, 16));
  })

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
          <Route path="/market" exact>
            <BuyPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Main