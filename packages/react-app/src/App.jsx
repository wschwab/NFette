import React from "react";
import { JsonRpcProvider } from "@ethersproject/providers";
import { StoreProvider } from "./store/store";
import { INFURA_ID } from "./constants";
import Main from "./containers/main/main";
import { ContractProvider } from "./store/contractContext/contractContext";

function App(props) {
  return (
    <StoreProvider>
      <ContractProvider>
        <div className="App">
          <Main />
        </div>
      </ContractProvider>
    </StoreProvider>
  );
}

export default App;
