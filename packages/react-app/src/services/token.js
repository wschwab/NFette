import { ethers } from "ethers";
import * as marketAbi from "../contracts/NFTMarketTemplate.abi"
import * as erc20Abi from "../contracts/ERC20Mock.abi"
import * as marketAddress from "../contracts/NFTMarketTemplate.address";
import * as erc20Address from "../contracts/ERC20Mock.address"

export const buyShareTokens = async (amount, state) => {
    const marketContract = new ethers.Contract(marketAddress, marketAbi, state.provider);
    await marketContract.buy(amount);
}

export const sellShareTokens = async (amount, state) => {
    const marketContract = new ethers.Contract(marketAddress, marketAbi, state.provider);
    await marketContract.sell(amount);
}