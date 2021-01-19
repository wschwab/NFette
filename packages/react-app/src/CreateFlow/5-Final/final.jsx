import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Store } from "../../store/store";
import styles from "./finalStyles";

const etherscanLink = "https://etherscan.io/";

function Final(props) {
  const { classes } = props;
  const { state, actions } = useContext(Store);

  const shortURI = `${state.nftDetails.uri.slice(0, 31)}...`;
  const hasURI = state.nftDetails.uri ? shortURI : '';
  
  return (
    <div className={classes.root}>
      <div className={classes.modalHeadingContainer}>
        <h2 className={classes.subheading}>Your New Market Contract Address</h2>
        <div className="gradientBorder"></div>
      </div>
      <div className={classes.infoBox}>
        <div className={classes.smallBox}>
          <div>Name: {state.nftDetails.name}</div>
          <div>Contract Address: 0xC54070dA79E7E3e2c95D3...</div>
          <div>NFT Symbol: {state.nftDetails.symbol}</div>
          <div>Max Supply: 50 {state.nftDetails.maxSupply}</div>
          {/* <div>URI: {hasURI}</div> */}
        </div>
        <div className={classes.infoDivider}></div>
        <div className={classes.smallBox}>
          <div>Collateral Type: DAI {state.nftDetails.collateralType}</div>
          <div>Initial Price: 50 {state.nftDetails.initialPrice}</div>
          <div>ERC20 Name: {state.nftDetails.name}-SHARES</div>
          <div>ERC20 Symbol: {state.nftDetails.symbol}</div>
        </div>
      </div>
      <div className={classes.mainContainer}>
        <div className={classes.innerBox}>
          <p className={classes.address}>0xC54070dA79E7E3e2c95D3a91fe98A42000e65a48</p>
          <div className={classes.divider}></div>
          <a className={classes.link} href={etherscanLink}>
            Copy Contract Address for your NFT
          </a>
        </div>
      </div>
      <div className={classes.btnBar}>
        <button className={`${classes.middle} button`}>View Market</button>
      </div>
    </div>
  );
}

export default withStyles(styles)(Final);
