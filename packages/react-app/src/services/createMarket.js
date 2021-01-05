import { ethers } from "ethers";

const createMarket = async (state)=> {
    const {provider}= state;
    const signer = provider.getSigner();
    const contract = new ethers.Contract() // address, abi, signer

    const result = await contract.createMarket(
        state.nftDetails.name,
        state.nftDetails.address,
        state.tokenDetails.maxSupply,
        state.tokenDetials.collateralType,
        state.tokenDetails.curveShape,
        state.tokenDetails.name,
        state.tokenDetails.symbol,
        "" // this is how we pass in the liquidity pool, prolly an address
    )
    return result;
}

export default createMarket;
