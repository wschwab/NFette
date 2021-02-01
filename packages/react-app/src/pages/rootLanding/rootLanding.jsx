import React, { useContext, useState } from "react";
import { Store } from "../../store/store";
import styles from "./rootLandingStyles";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { SwitchNetwork } from "../../components/SwitchNetwork";

function RootLanding(props) {
  const { classes, navigation } = props;
  const { state, actions } = useContext(Store);
  const history = useHistory();
  
  return (
    <div className={classes.root}>
      {state.chainId === null || state.chainId === 4 || state.chainId === 31337 ? "" : <SwitchNetwork />}
      <div className="gradientBorderTop"></div>
      <div className={classes.heading}>
        <h2 className={classes.headingText}>Virtually define the value of what is 
          <br></br>
          <span>
            <span className={classes.y}>Y</span>
            <span className={classes.o}>o</span>
            <span className={classes.u}>u</span>
            <span className={classes.r}>r</span>
            <span className={classes.s}>s</span>
            <span>.</span>
            </span>
          </h2>
          </div>
      <div className={classes.subHeading}>
        <p className={classes.textfirst}>
          {
            "Create a digital market for your valuable work and make $SHARE tokens available to all"
          }
        </p>
        <p className={classes.textsecond}>
          {
            "collectors, traders and other creators."
          }
        </p>
      </div>
      <div className={classes.container}>
        <div className={classes.stepBox}>
          <button
            onClick={() => {
              history.push("/create");
            }}
            className={classes.btnRight}
            disabled={state.chainId === null}
          >
            Create Market
          </button>
        </div>
        <br></br>
        <div className={classes.stepBox}>
          <button
          onClick={() => {
              history.push(`/market/${state.tokenDetails.contractAddress}`);
            }}
            className={classes.btnRight}
            disabled={state.chainId === null}
          >
            View Market
          </button>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(RootLanding);
