import React from "react";
import { ethers } from "ethers";
import { getEthersContracts } from "../helpers/contractBooter"

const asciiLogBurnMessage = (message) =>
  console.log(
      message,
      "color: #379e48"
  );

const asciiLogMintMessage = (message) =>
  console.log(
      message,
      "color: #379e48"
  );

  export const asciiTransfer = (
    txHash,
    amount,
    sender,
    receiver,
    blocknumber,
    minReward
  ) =>
    asciiLogBurnMessage(
      `\n---   TRANSFER AT BLOCK ${blocknumber}   --- \n TX HASH - ${txHash}\n SENDER - ${sender} \n RECEIVER - ${receiver} \n BRINC - ${amount} \n --- END OF TRANSFER ---`
    );

export const asciiBurn = (
  txHash,
  amount,
  rewardReceived,
  seller,
  blocknumber,
  minReward
) =>
  asciiLogBurnMessage(
    `\n---   BURN AT BLOCK ${blocknumber}   --- \n TX HASH - ${txHash}\n SELLER - ${seller} \n BRINC - ${amount} \n DAI RECEIVED - ${rewardReceived} \n --- END OF BURN ---`
  );
export const asciiMint = (
  txHash,
  amount,
  pricePaid,
  buyer,
  blocknumber,
  maxSpend
) =>
  asciiLogMintMessage(
    `\n---   MINT AT BLOCK ${blocknumber} --- \n TX HASH - ${txHash} \n BUYER - ${buyer} \n BRINC - ${amount} \n DAI SPENT - ${pricePaid} \n  --- END OF MINT ---`
  );

// This is because EventListener is refreshed by the DOM and we MUST NOT CREATE MORE EVENTLISTENERS
// PLEASE LORD DO NOT KILL MY INFURA ENDPOINT - NO TOUCHY THIS VALUE
let booted = false;

const EventListener = () => {
//   const { actions } = useContext(StoreContext);
//   const { contracts } = useContext(ContractContext);
  if (booted) return <></>;


  if (`${process.env.REACT_APP_INFURA_ENDPOINT}` === null) {
    console.log("NO INFURA ENDPOINT SET -- CANNOT LOG");
    return;
  }
  let provider = getProvider();

  // const contractsEthers = getEthersContracts(provider);

//   contractsEthers.tokenContract.once(
//     "Transfer",
//     (from, to, amount, event) => {
//         if(from === "0x0000000000000000000000000000000000000000"){
//             asciiMint(
//                 event.transactionHash,
//                 ethers.utils.formatUnits(amount, 18),
//                 "--",
//                 to,
//                 event.blockNumber,
//                 "--"
//               );
//         }
//         else if(to === "0x0000000000000000000000000000000000000000") {
//             asciiBurn(
//                 event.transactionHash,
//                 ethers.utils.formatUnits(amount, 18),
//                 "--",
//                 from,
//                 event.blockNumber,
//                 "--"
//               );
//         }
//         else{
//             asciiTransfer(
//                 event.transactionHash,
//                 ethers.utils.formatUnits(amount, 18),
//                 "--",
//                 from,
//                 to,
//                 event.blockNumber
//               );
//         }
      
//       //actions.loadConversions(contracts);
//     }
//   );


  booted = true;
  return <></>;
};

function getProvider() {
  let provider = ethers.providers.JsonRpcProvider;
  if (parseInt(`${process.env.REACT_APP_CHAIN_ID}`) !== 1337) {
    provider = new ethers.providers.JsonRpcProvider(
      `${process.env.REACT_APP_INFURA_ENDPOINT}`
    );
  } else {
    provider = new ethers.providers.JsonRpcProvider("http://localhost:8545/");
  }
  return provider;
}

export default EventListener;
