import { ethers } from "ethers";
import * as abi from "../contracts/MyNFT.abi";
import * as bytecode from "../contracts/MyNFT.bytecode";

const createNFT = async state => {
    const { provider } = state;
    // console.log("PROVIDER FROM INSIDE CREATENFT: ", state.provider);
    const signer = await provider.getSigner();
    const factory = new ethers.ContractFactory(abi, bytecode, signer);

    const contract = await factory.deploy(
        state.nftDetails.name,
        state.nftDetails.symbol,
        parseInt(state.nftDetails.uri)
    );

    await contract.deployTransaction.wait();

    return contract
}

export default createNFT; 