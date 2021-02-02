import React, { createContext } from "react";
import Web3 from "web3";
// import { getNetwork } from "ethers/utils";
// import {getWeb3Contracts} from "../helpers/contractBooter";

const getNetwork = (f) => f

export const ContractContext = createContext({});

export function ContractProvider(props) {
  const network = getNetwork(parseInt(`${process.env.REACT_APP_CHAIN_ID}`));
  let web3 = new Web3(Web3.givenProvider || "http://localhost:8545/");
  if(network.chainId !== 1337){
    try{
      if (process.env.REACT_APP_INFURA_ENDPOINT) {
        web3 = new Web3(`${process.env.REACT_APP_INFURA_ENDPOINT}`)
      }
      else{
        web3 = new Web3(window.ethereum);
      }
      
    }
    catch( error ){
      web3 = new Web3(`${process.env.REACT_APP_INFURA_ENDPOINT}`)
    }
  }

  var contracts = null//getWeb3Contracts(web3);

  const value = { contracts,  provider: web3.eth };
  return (
    <ContractContext.Provider value={value}>
      {props.children}
    </ContractContext.Provider>
  );
}
