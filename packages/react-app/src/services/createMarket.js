import { ethers } from "ethers";
import * as abi from "../contracts/NFTMarketFactory.abi";
import * as marketAbi from "../contracts/NFTMarketTemplate.abi";
import * as address from "../contracts/NFTMarketFactory.address";

export const createdMarketEventLogMessage = (
    market,
    cap,
    initialPriceFor1
  ) =>
    console.log(
      `\n--- MARKET CREATION  --- \n Market address - ${market} \n CAP - ${cap} \n INITIAL PRICE FOR 1 - ${initialPriceFor1} \n --- END OF MARKET CREATE ---`
    );

const createMarket = async (state)=> {
    const { provider } = state;
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);

    const isCollateralEth = state.tokenDetails.collateralType === "ETH";

    const collateralAddress = 
        state.collateral[state.tokenDetails.collateralType];

    // setupCreateMarketEventToLogOnce(contract, provider);

    // The second await is for the transaction to mined - this allows us to get the events called and the data on those.
    const result = await (await contract
        .createMarket(
            state.nftDetails.contractAddress,
            // state.nftDetails.uri,
            state.tokenDetails.name,
            state.tokenDetails.symbol,
            ethers.utils.parseEther(state.tokenDetails.maxSupply),
            ethers.utils.parseEther(state.tokenDetails.initialPrice),
            state.curve.address,
            [
             state.curve[state.curve.curveShape][0].toString(),
             state.curve[state.curve.curveShape][1].toString(),
             ethers.utils.parseEther(state.tokenDetails.initialPrice)
            ],
            isCollateralEth,
            collateralAddress
            )).wait()

    return {nftMarketContractAddress: result.events[1].args[1]};
}

export default createMarket;

// This was for testing that values were set correctly, can be reused for other calls if needed.
// NOTE: See the listener removal after logging. This keeps it from adding more than one listener.

// function setupCreateMarketEventToLogOnce(contract, provider) {
//     contract.once("NFTMarketRegistered", (market,
//         parentToken,
//         name,
//         symbol,
//         owner,
//         cap,
//         bondingCurveAddr,
//         isCollateralEth,
//         stakeTokenAddress, event) => {
//         const marketContract = new ethers.Contract(market, marketAbi.abi, provider);
//         marketContract.getBuyCost(ethers.utils.parseEther("1")).then((priceOfFirstToken) => {
//             createdMarketEventLogMessage(
//                 market,
//                 ethers.utils.formatEther(cap),
//                 ethers.utils.formatEther(priceOfFirstToken)
//             );
//             contract.removeAllListeners("NFTMarketRegistered");
//         });
//     });
// }
