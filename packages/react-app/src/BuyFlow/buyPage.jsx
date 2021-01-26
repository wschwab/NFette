import React, { useContext } from "react";
import { Store } from "../store/store";
import styles from "./buyPageStyles";
import { withStyles } from "@material-ui/core/styles";
import PriceChart from "./priceChart";

function BuyPage(props) {
  const { classes } = props;
  const { state, actions } = useContext(Store);
  const imageUrlExample = "https://www.verdict.co.uk/wp-content/uploads/2020/04/shutterstock_1300066633.jpg";

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
          {state.nftDetails.title === "" ? (
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
          {state.nftDetails.initialPrice === "" ? (
            <div className={classes.price}>Price</div>
          ) : (
            <div className={classes.price}>Price: {state.nftDetails.initialPrice}</div>
          )}
          {state.nftDetails.maxSupply === "" ? (
            <div className={classes.maxSupply}>Max Supply of tokens</div>
          ) : (
            <div className={classes.maxSupply}>Max Supply of tokens:{state.nftDetails.maxSupply}</div>
          )}
          {state.nftDetails.collateralType === "" ? (
            <div className={classes.maxSupply}>Accepted Collateral: </div>
          ) : (
            <div className={classes.maxSupply}>Accepted Collateral: {state.nftDetails.collateralType}</div>
          )}
          <PriceChart />
        </div>
      </div>
      <div className={classes.buttons}>
        <button>Buy Shares</button>
      </div>
    </div>
  );
}

export default withStyles(styles)(BuyPage);
