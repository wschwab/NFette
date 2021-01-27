import { ethers } from "ethers";
import * as marketAbi from "../contracts/NFTMarketTemplate.abi";
import * as nftAbi from "../contracts/NFetteNFT.abi";

export const importDetails = async (state, actions) => {
    // need to figure out how to best get the market address
    const marketAddress = actions.setTokenContractAddress(); 
    const marketContract = new ethers.Contract(marketAddress, marketAbi, state.provider);
    const nftAddress = await marketContract.parentToken();
    const nftContract = new ethers.Contract(nftAddress, nftAbi, state.provider);

    // ERC20 details
    actions.setTokenName(await marketContract.name());
    actions.setTokenSymbol(await marketContract.symbol());
    actions.setCurrentSupply(await marketContract.totalSupply()); // may need to be decoded
    actions.setMaxSupply(await marketContract.cap()); //may need to be decoded
    actions.setInitialPrice(await marketContract.initialBidPrice()); //may need to be decoded
    const collateral = await marketContract.getStakeToken();
    for (let i = 0; i < Object.keys(state.collateral).length - 1; i++) {
        if (Object.values(state.collateral)[i] === collateral) {
            actions.setCollateralType(Object.keys(state.collateral)[i]);
            break;
        }
        // if it's not on the list, default ETH
        actions.setCollateralType("ETH");
    }

    // NFT details
    actions.setNFTName(await nftContract.name());
    actions.setNFTSymbol(await nftContract.symbol());
    actions.setNFTUri(await nftContract.baseURI());

    // Curve details
    const curveDetails = await marketContract.getCurve();
    const curveType = curveDetails[0] === 0 ? "linear" : "polynomial";
    actions.setCurve(curveType);
}