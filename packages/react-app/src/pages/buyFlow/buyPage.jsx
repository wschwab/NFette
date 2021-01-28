import React, { useState, useContext, useEffect } from "react";
import { ethers } from "ethers";
import { Store } from "../../store/store";
import styles from "./buyPageStyles";
import { withStyles } from "@material-ui/core/styles";
import PriceChart from "./priceChart";
import { getMTXBalance, getSharesBalance, getBuyPrice } from "../../services/balanceAndPrice";
import { providers } from "web3modal";
import { importDetails } from "../../services/importDetails";

function BuyPage(props) {
  const { classes } = props;
  const { state, actions, provider } = useContext(Store);
  const [ balances, setBalances] = useState({
    mtx: null,
    shares: null,
    priceForOne: null
  });
  const imageUrlExample = "https://www.verdict.co.uk/wp-content/uploads/2020/04/shutterstock_1300066633.jpg";

  useEffect(() => {
    const url = window.location.href;
    const splitUrl = url.split("/");
    // console.log(splitUrl);
    const marketAddress = splitUrl[splitUrl.length -1];
    // console.log(marketAddress);
    const initialize = async () => {
      await importDetails(marketAddress, state, actions);
      setBalances({
        mtx: await getMTXBalance(state.userAddress, state.collateral.MTX, provider),
        shares: await getSharesBalance(state.userAddress, state.tokenDetails.contractAddress, provider),
        priceForOne: await getBuyPrice(1, state.tokenDetails.contractAddress, provider)
      });
    }
    initialize();
    console.log("balances: ", balances);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.heading}>Market Listing</div>
      <div className={classes.buyContainer}>
        <div className={classes.leftPanel}>
          {state.nftDetails.uri === "nfette.io" ? (
            <img src={imageUrlExample} className={classes.image} />
          ) : (
            <img src={state.nftDetails.uri} className={classes.image} />
          )}
        </div>
        <div className={classes.rightPanel}>
          <div className={classes.title}>Title of piece: {state.nftDetails.name}</div>
          <div className={classes.token}>Symbol: {state.nftDetails.symbol}</div>
          <div className={classes.contractAddress}>Contract Address: {state.tokenDetails.contractAddress}</div>
          <div className={classes.price}>Price: {balances.priceForOne}</div>
          <div className={classes.maxSupply}>Max Supply of tokens:{state.tokenDetails.maxSupply}</div>
          <div className={classes.maxSupply}>Accepted Collateral: {state.tokenDetails.collateralType}</div>
          <PriceChart />
        </div>
      </div>
      <div>
        <div>
          <h2>Buy {state.tokenDetails.name} Tokens</h2>
          <p>Balance: {balances.mtx} MTX</p>
          <div  className={classes.buttons}>
            <button>Buy</button>
          </div>
        </div>
        <div>
          <h2>Sell {state.tokenDetails.name} Tokens</h2>
          <p>Balance: {balances.shares} {state.tokenDetails.symbol}</p>
          <div  className={classes.buttons}>
            <button>Sell</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(BuyPage);
