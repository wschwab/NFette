import React, { useContext, useEffect } from "react";
import { Store } from "../../store/store";
import styles from "./buyPageStyles";
import { withStyles } from "@material-ui/core/styles";
import PriceChart from "./priceChart";
import { getMTXBalance, getSharesBalance } from "../../services/balance";
import { providers } from "web3modal";
import { importDetails } from "../../services/importDetails";

function BuyPage(props) {
  const { classes } = props;
  const { state, actions } = useContext(Store);
  const imageUrlExample = "https://www.verdict.co.uk/wp-content/uploads/2020/04/shutterstock_1300066633.jpg";

  useEffect(() => {
    importDetails(state, actions);
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.heading}>Market Listing</div>
      <div className={classes.buyContainer}>
        <div className={classes.leftPanel}>
          {state.nftDetails.uri === "" ? (
            <img src={imageUrlExample} className={classes.image} />
          ) : (
            <img src={state.nftDetails.uri} className={classes.image} />
          )}
        </div>
        <div className={classes.rightPanel}>
          {state.nftDetails.name === "" ? (
            <div className={classes.title}>Title of piece</div>
          ) : (
            <div className={classes.title}>Title of piece: {state.nftDetails.name}</div>
          )}
          {state.nftDetails.symbol === "" ? (
            <div className={classes.token}>Symbol</div>
          ) : (
            <div className={classes.token}>Symbol: {state.nftDetails.symbol}</div>
          )}
          {state.nftDetails.contractAddress === "" ? (
            <div className={classes.contractAddress}>Contract Address:</div>
          ) : (
            <div className={classes.contractAddress}>Contract Address: {state.nftDetails.contractAddress}</div>
          )}
          {state.tokenDetails.initialPrice === "" ? (
            <div className={classes.price}>Price</div>
          ) : (
            <div className={classes.price}>Price: {state.tokenDetails.initialPrice}</div>
          )}
          {state.tokenDetails.maxSupply === "" ? (
            <div className={classes.maxSupply}>Max Supply of tokens</div>
          ) : (
            <div className={classes.maxSupply}>Max Supply of tokens:{state.tokenDetails.maxSupply}</div>
          )}
          {state.tokenDetails.collateralType === "" ? (
            <div className={classes.maxSupply}>Accepted Collateral: </div>
          ) : (
            <div className={classes.maxSupply}>Accepted Collateral: {state.tokenDetails.collateralType}</div>
          )}
          <PriceChart />
        </div>
      </div>
      <div>
        <div>
          <h2>Buy {state.tokenDetails.name} Tokens</h2>
          <p>Balance: {() => getMTXBalance(state.userAddress, state.collateral.MTX)} MTX</p>
          <div  className={classes.buttons}>
            <button>Buy</button>
          </div>
        </div>
        <div>
          <h2>Sell {state.tokenDetails.name} Tokens</h2>
          <p>Balance: {() => getSharesBalance(state.userAddress, state.tokenDetails.contractAddress)} {state.tokenDetails.symbol}</p>
          <div  className={classes.buttons}>
            <button>Sell</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(BuyPage);
