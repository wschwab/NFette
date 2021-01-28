import { ethers } from "ethers";
import * as erc20abi from "../contracts/ERC20Mock.abi";
import * as marketAbi from "../contracts/NFTMarketTemplate.abi";

export const getERC20Balance = async (ethAddress, contract, decimals) => {
    const tokenBalance = await contract.methods.balanceOf(ethAddress).call();
    return Number(ethers.utils.formatUnits(tokenBalance.toString(), decimals));
};

export const getMTXBalance = async (userAddress, tokenAddress, provider) => {
    const contract = new ethers.Contract(tokenAddress, erc20abi, provider);
    const balance = await contract.balanceOf(userAddress);
    // I think ethers auto-formats, if it doesn't, we can call the contract for the decimals
    // I'll leave a log to see how decimals comes back
    // const decimals = await contract.decimals();
    // console.log("DECIMALS: ", decimals);

    return balance;
}

export const getSharesBalance = async (userAddress, marketAddress, provider) => {
    const contract = new ethers.Contract(marketAddress, marketAbi, provider);
    const balance = await contract.balanceOf(userAddress);

    return balance;
}

export const getBuyPrice = async (amount, marketAddress, provider) => {
    const contract = new ethers.Contract(marketAddress, marketAbi, provider);
    const buyPrice = await contract.getBuyCost(amount);

    return buyPrice;
}
