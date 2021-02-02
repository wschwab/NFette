import { ethers } from "ethers";
import * as erc20abi from "../contracts/ERC20Mock.abi";
import * as marketAbi from "../contracts/NFTMarketTemplate.abi";

export const getERC20Balance = async (ethAddress, contract, decimals) => {
    const tokenBalance = await contract.methods.balanceOf(ethAddress).call();
    return Number(ethers.utils.parseUnits(tokenBalance.toString(), decimals));
};

export const getRARBalance = async (userAddress, tokenAddress, provider) => {
    const contract = new ethers.Contract(tokenAddress, erc20abi, provider);
    const rawBalance = await contract.balanceOf(userAddress);
    // I think ethers auto-formats, if it doesn't, we can call the contract for the decimals
    // I'll leave a log to see how decimals comes back
    const decimals = await contract.decimals();
    // console.log("DECIMALS: ", decimals);
    const balance = ethers.utils.formatUnits(rawBalance, decimals);

    return balance;
}

export const getSharesBalance = async (userAddress, marketAddress, provider) => {
    const contract = new ethers.Contract(marketAddress, marketAbi, provider);
    const rawBalance = await contract.balanceOf(userAddress);
    const balance = ethers.utils.formatEther(rawBalance);

    return balance;
}
// ethers.utils.parseUnits(amount.toString(), 18)
export const getBuyPrice = async (amount, marketAddress, provider) => {
    const formattedAmount = typeof amount === "string" ? amount : amount.toString();
    const contract = new ethers.Contract(marketAddress, marketAbi, provider);
    console.log("AMOUNT: ", amount, "TYPEOF amount: ", typeof amount);
    // debugger;
    const buyPriceRaw = await contract.getBuyCost(formattedAmount);
    const buyPrice = ethers.utils.formatEther(buyPriceRaw);

    return buyPrice;
}
