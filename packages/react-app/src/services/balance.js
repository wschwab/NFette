import { ethers } from "ethers";
import * as abi from "../contracts/ERC20Mock.abi";

export const getERC20Balance = async (ethAddress, contract, decimals) => {
    const tokenBalance = await contract.methods.balanceOf(ethAddress).call();
    return Number(ethers.utils.formatUnits(tokenBalance.toString(), decimals));
};

export const getMTXBalance = async (userAddress, tokenAddress) => {
    const contract = new ethers.Contract(tokenAddress, abi);
    const balance = await contract.balanceOf(userAddress);
    // I think ethers auto-formats, if it doesn't, we can call the contract for the decimals
    // I'll leave a log to see how decimals comes back
    // const decimals = await contract.decimals();
    // console.log("DECIMALS: ", decimals);

    return balance;
}

export const getSharesBalance = async (userAddress, tokenAddress) => {
    const contract = new ethers.Contract(tokenAddress, abi);
    const balance = await contract.balanceOf(userAddress);

    return balance;
}
