import { ethers } from "ethers";
import * as abi from "../contracts/NFTMarketFactory.abi";
import * as address from "../contracts/NFTMarketFactory.address";

const createMarket = async (state)=> {
    const {provider}= state;
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);

    const isCollateralEth = state.tokenDetails.collateralType === "eth";
    const collateralAddress = state.tokenDetails.collateralType === "eth" ?
        ethers.constants.AddressZero :
        state.collateral[state.tokenDetails.collateralType];

    const result = await contract
        .createMarket(
            state.nftDetails.contractAddress,
            state.nftDetails.uri,
            state.tokenDetails.name,
            state.tokenDetails.symbol,
            parseInt(state.tokenDetails.maxSupply),
            parseInt(state.tokenDetails.initialPrice),
            [state.curve[state.curve.curveShape][0],state.curve[state.curve.curveShape][1], parseInt(state.tokenDetails.initialPrice)],
            state.curveAddresses,
            isCollateralEth,
            collateralAddress
        )
        .catch(e => console.error(e));

    console.log("HERE'S THE RESULT: ", result);

    return result;
}

export default createMarket;