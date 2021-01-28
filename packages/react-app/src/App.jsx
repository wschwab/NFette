import React from "react";
import { JsonRpcProvider } from "@ethersproject/providers";
import { StoreProvider } from "./store/store";
import { INFURA_ID } from "./constants";
import Main from "./containers/main/main";

// import Web3Modal from "web3modal";
// import Portis from "@portis/web3";
import { ContractProvider } from "./store/contractContext/contractContext";
import EventListener from "./services/events";

const blockExplorer = "https://etherscan.io/"; // for xdai: "https://blockscout.com/poa/xdai/"
const mainnetProvider = new JsonRpcProvider("https://mainnet.infura.io/v3/" + INFURA_ID);
const localProviderUrl = "http://localhost:8545"; // for xdai: https://dai.poa.network
const localProviderUrlFromEnv = process.env.REACT_APP_PROVIDER ? process.env.REACT_APP_PROVIDER : localProviderUrl;
const localProvider = new JsonRpcProvider(localProviderUrlFromEnv);

// const providerOptions = {
//   portis: {
//     package: Portis,
//     options: {
//       id: "f5c8dbd5-f553-4641-943e-9223c9e65a0a",
//       network: "rinkeby"
//     },
//   },
// };

// const w3m = new Web3Modal({
//   // network: "mainnet",
//   network: "rinkeby",
//   cacheProvider: false,
//   providerOptions,
// });

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
