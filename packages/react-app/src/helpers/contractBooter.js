// import CurveABI from "../../interfaces/TaxedStableCurve.json";
// import ERC20ABI from "../../interfaces/ERC20.json";
// import TokenABI from "../../interfaces/TaxedStableCurve.json";
// import RouterV2 from "../../interfaces/RouterV2.json";
// import {AbiItem} from "web3-utils";
// import { Contract } from "ethers";

// export function getWeb3Contracts(web3) {
//     const daiContract = new web3.eth.Contract(
//       ERC20ABI.abi as AbiItem[],
//       `${process.env.REACT_APP_MOCK_DAI}`);

//     const curveContract = new web3.eth.Contract(
//       CurveABI.abi as AbiItem[],
//       `${process.env.REACT_APP_CURVE}`
//     );
//     const tokenContract = new web3.eth.Contract(
//       TokenABI.abi as AbiItem[],
//       `${process.env.REACT_APP_TOKEN}`
//     );
//     const routerContract = new web3.eth.Contract(
//       RouterV2.abi as AbiItem[],
//       `${process.env.REACT_APP_ROUTER}`
//     );

//     const contracts = {
//       daiContract,
//       curveContract,
//       tokenContract,
//       routerContract,
//       usdcContract,
//       wbtcContract
//     };
//     return contracts;
//   }

  
// export function getEthersContracts(provider) {
//     const daiContract = new Contract(`${process.env.REACT_APP_MOCK_DAI}`,
//       ERC20ABI.abi as AbiItem[],
//       provider);

//     const curveContract = new Contract(`${process.env.REACT_APP_CURVE}`,
//       CurveABI.abi as AbiItem[],
//       provider
//     );
//     const tokenContract = new Contract( `${process.env.REACT_APP_TOKEN}`,
//       TokenABI.abi as AbiItem[],
//       provider
//     );
//     const routerContract = new Contract( `${process.env.REACT_APP_ROUTER}`,
//       RouterV2.abi as AbiItem[],
//       provider
//     );

//     const contracts = {
//       daiContract,
//       curveContract,
//       tokenContract,
//       routerContract,
//     };
//     return contracts;
//   }