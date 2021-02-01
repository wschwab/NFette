import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/core/styles";
import { Store } from "../../../store/store";
import styles from "./finalStyles";
import { useHistory } from "react-router-dom";

function Final(props) {
  const { classes } = props;
  const { state, actions } = useContext(Store);
  const [copied, setCopied] = useState(false);
  const history = useHistory();

  const tokenName = state.nftDetails.name;
  const printName = tokenName ? `${state.nftDetails.name}-SHARES` : "";
  const shortAddress = `${state.nftDetails.contractAddress.slice(0, 25)}...`;

  const copyHandler = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className={classes.root}>
      <div className={classes.modalHeadingContainer}>
        <h2 className={classes.subheading}>Your New Market Contract Address</h2>
        <div className="gradientBorder"></div>
      </div>
      <div className={classes.infoBox}>
        <div className={classes.smallBox}>
          <div>Name: {state.nftDetails.name}</div>
          <div>Contract Address: {shortAddress}</div>
          <div>NFT Symbol: {state.nftDetails.symbol}</div>
          <div>Max Supply: {state.tokenDetails.maxSupply}</div>
        </div>
        <div className={classes.infoDivider}></div>
        <div className={classes.smallBox}>
          <div>Collateral Type: {state.tokenDetails.collateralType}</div>
          <div>Initial Price: {state.tokenDetails.initialPrice}</div>
          <div>ERC20 Name: {printName}</div>
          <div>ERC20 Symbol: {state.nftDetails.symbol}</div>
        </div>
      </div>
      <div className={classes.mainContainer}>
        <div className={classes.innerBox}>
          <p className={classes.address}>{state.nftDetails.contractAddress}</p>
          <div className={classes.divider}></div>
          <CopyToClipboard className={classes.link} text={state.nftDetails.contractAddress} onCopy={copyHandler}>
            {copied ? <button>Copied!</button> : <button>Click here to copy contract address for your NFT</button>}
          </CopyToClipboard>
        </div>
      </div>
      <div
        className={classes.btnBar}
        onClick={() => {
          history.push("/market");
        }}
      >
        <button className={`${classes.middle} button`}>View Market</button>
      </div>
    </div>
  );
}

export default withStyles(styles)(Final);
