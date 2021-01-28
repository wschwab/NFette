import React from "react";
import { JsonRpcProvider } from "@ethersproject/providers";
import { StoreProvider } from "./store/store";
import { INFURA_ID } from "./constants";
import Main from "./containers/main/main";

// import Web3Modal from "web3modal";
// import Portis from "@portis/web3";
import { ContractProvider } from "./store/contractContext/contractContext";
import EventListener from "./services/events";

function App(props) {
  return (
    <StoreProvider>
      <EventListener />
      <ContractProvider>
        <div className="App">
          <Main />
        </div>
      </ContractProvider>
    </StoreProvider>
  );
}

export default App;
