import React from "react";
import styles from "./rootLandingStyles";
import { withStyles } from "@material-ui/core/styles";
import MultiStepSellFlow from "../../CreateFlow/MultiStepSellFlow";
import AvailableMarkets from "../../BuyFlow/availableMarkets";
import { useHistory } from "react-router-dom";
import NftCard from "../nftCard/nftCard";

function RootLanding(props) {
  const { classes, navigation } = props;
  const history = useHistory();

  return (
    <div className={classes.root}>
      <div className={classes.heading}>Virtually define the value of what is yours. Create & collect NFTs with NFette.</div>
      <p className={classes.subHeading}></p>
      <div className={classes.stepsContainer}>
        <div className={classes.stepBox}>
          <p className={classes.text}>{"View & purchase available NFTs by various artists."}</p>
          <button onClick={() => {
              history.push("/buy")
          }} className={classes.btnRight}>
            Buy NFT
          </button>
          <span className="gradientBorder"></span>
        </div>
        <div className={classes.stepBox}> 
          <p className={classes.text}>{"Easily create your own NFT by following our steps"}</p>
          <button onClick={() => {
              history.push("/sell")
          }} className={classes.btnRight}>
            Create NFT
          </button>
          <span className="gradientBorder"></span>
        </div>
        </div>
    </div>
  );
}

export default withStyles(styles)(RootLanding);
