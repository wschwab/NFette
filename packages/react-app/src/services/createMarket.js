import { ethers } from "ethers";
import * as abi from "../contracts/NFTMarketFactory.abi";
import * as address from "../contracts/NFTMarketFactory.address";

const createMarket = async (state)=> {
    debugger;
    const {provider}= state;
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer); // address, abi, signer

    console.log("ADDRESS: ", address);
    console.log("ABI: ", abi);
    console.log("SIGNER: ", signer);

    const result = await contract
        // .connect(signer)
        .createMarket(
            state.nftDetails.name,
            state.nftDetails.address,
            state.tokenDetails.maxSupply,
            state.tokenDetials.collateralType,
            state.tokenDetails.curveShape,
            state.tokenDetails.name,
            state.tokenDetails.symbol
        )
        .catch(e => console.error(e));
    return result;
}

export default createMarket;
