import { ethers } from "ethers";
import * as abi from "../contracts/NFTMarketFactory.abi";
import * as address from "../contracts/NFTMarketFactory.address";

const createMarket = async (state)=> {
    const {provider}= state;
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);

    const result = await contract
        .createMarket(
            state.nftDetails.contractAddress,
            parseInt(state.nftDetails.uri), // probably not a wise way to do this, see below
            state.tokenDetails.name,
            state.tokenDetails.symbol,
            parseInt(state.tokenDetails.maxSupply),
            parseInt(state.tokenDetails.initialPrice),
            [state.curve[state.curve.curveShape][0],state.curve[state.curve.curveShape][1], parseInt(state.tokenDetails.initialPrice)],
            state.curveAddresses,
            state.tokenDetials.collateralType, // currently not implemented
        )
        .catch(e => console.error(e));

    console.log("HERE'S THE RESULT: ", result);

    return result;
}

export default createMarket;

/* notes to self:
Here's a copy of the args for the createMarket function:
address parentToken,
uint256 parentTokenId,
string memory name,
string memory symbol,
uint256 cap,
uint256 initialBidPrice,
address bondingCurveAddr,
uint256[3] memory _curveParameters

so these need formatting, and there isn't even anything in place
for the multiple collateral types

Should probably get this working with USDC first, worst come to 
worst, it'll be the only collateral choice

I have some errors in my understanding about URIs, not good

need to make sure the curve addresses are filled in somewhere

*/