import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./finalStyles";

const etherscanLink = "https://etherscan.io/";

function Final(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.modalHeadingContainer}>
        <h2 className={classes.subheading}>Your New Market Contract Address</h2>
        <div className="gradientBorder"></div>
      </div>
      <div className={classes.mainContainer}>
        <div className={classes.messageBox}>
          <p className={classes.message}>Well done! Here is your new Market Contract Address.</p>
        </div>
        <div className={classes.innerBox}>
          <p className={classes.address}>0xC54070dA79E7E3e2c95D3a91fe98A42000e65a48</p>
          <div className={classes.divider}></div>
          <a className={classes.description} href={etherscanLink}>
            See on etherscan
          </a>
        </div>
      </div>
      <div className={classes.btnBar}>
        <button className={`${classes.middle} button`}>Copy</button>
      </div>
    </div>
  );
}

export default withStyles(styles)(Final);
