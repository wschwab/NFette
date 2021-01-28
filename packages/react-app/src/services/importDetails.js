import { ethers } from "ethers";
import * as marketAbi from "../contracts/NFTMarketTemplate.abi";
import * as nftAbi from "../contracts/NFetteNFT.abi";

export const importDetails = async (marketAddress, state, actions) => {
    debugger;
    // need to figure out how to best get the market address
    await actions.setTokenContractAddress(marketAddress); 
    const marketContract = new ethers.Contract(marketAddress, marketAbi, state.provider);
    const nftAddress = await marketContract.parentToken();
    const nftContract = new ethers.Contract(nftAddress, nftAbi, state.provider);

    // ERC20 details
    const currentSupplyRaw = await marketContract.totalSupply();
    const maxSupplyRaw = await marketContract.cap();
    const initialPriceRaw = await marketContract.initialBidPrice();
    await actions.setTokenName(await marketContract.name());
    await actions.setTokenSymbol(await marketContract.symbol());
    await actions.setCurrentSupply(ethers.utils.formatUnits(currentSupplyRaw.toString(), 18));
    await actions.setMaxSupply(ethers.utils.formatUnits(maxSupplyRaw.toString(), 18));
    await actions.setInitialPrice(ethers.utils.formatEther(initialPriceRaw));
    const collateral = await marketContract.getStakeToken();
    for (let i = 0; i < Object.keys(state.collateral).length - 1; i++) {
        if (Object.values(state.collateral)[i] === collateral) {
            await actions.setCollateralType(Object.keys(state.collateral)[i]);
            break;
        }
        // if it's not on the list, default ETH
        await actions.setCollateralType("ETH");
    }

    // NFT details
    await actions.setNFTName(await nftContract.name());
    await actions.setNFTSymbol(await nftContract.symbol());
    await actions.setNFTUri(await nftContract.baseURI());

    // Curve details
    const curveDetailsRaw = await marketContract.getCurve()
    const curveType = curveDetailsRaw[0].toString() === "0" ? "linear" : "polynomial";
    await actions.setCurve(curveType);

    console.log(`
        market address: ${marketAddress} 
        nft address: ${nftAddress} 
        current supply: ${ethers.utils.formatUnits(currentSupplyRaw.toString(), 18)}
        max supply: ${ethers.utils.formatUnits(maxSupplyRaw.toString(), 18)}
        collateral: ${collateral}
    `)
}

// export const nftDetails = async (nftAddress, state, actions) => {
//     const nftContract = new ethers.Contract(nftAddress, nftAbi, state.provider);

//     await actions.setNFTName(await nftContract.name());
//     await actions.setNFTSymbol(await nftContract.symbol());
//     await actions.setNFTUri(await nftContract.baseURI());
// }