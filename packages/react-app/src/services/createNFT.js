import { ethers } from "ethers";
import * as abi from "../contracts/NFetteNFT.abi";
import * as bytecode from "../contracts/NFetteNFT.bytecode";

const createNFT = async state => {
    
    const { actions, provider } = state;
    const signer = await provider.getSigner();
    const factory = new ethers.ContractFactory(abi, bytecode, signer);

    const contract = await factory.deploy(
        state.nftDetails.name,
        state.nftDetails.symbol,
        state.nftDetails.uri
    );

    await contract.deployTransaction.wait();

    return contract
}

export default createNFT; 