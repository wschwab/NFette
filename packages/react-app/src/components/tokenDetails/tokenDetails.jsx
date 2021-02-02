import React, { useContext } from "react";
import { Store } from "../../store/store";
import styles from "./tokenDetailsStyles";
import { withStyles } from "@material-ui/core/styles";

function TokenDetails(props) {
  const { classes } = props;
  const { state, actions } = useContext(Store);
  return (
    <div className={classes.root}>
      <div className={classes.infoBox}>
        <div className={classes.smallBox}>
          {state.nftDetails.contractAddress === "" ? (
            <div className={classes.contractAddress}>Contract Address:</div>
          ) : (
            <div className={classes.contractAddress}>Contract Address: {state.nftDetails.contractAddress}</div>
          )}
          <div>NFT contract address: 0x47486464jhi87572345t</div>
        </div>
        <div className={classes.infoDivider}></div>
        <div className={classes.smallBox}>
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
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(TokenDetails);
