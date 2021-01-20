import React, {useState} from "react";
import styles from "./rootLandingStyles";
import { withStyles } from "@material-ui/core/styles";
import MultiStepCreateFlow from "../../CreateFlow/MultiStepCreateFlow";
import BuyPage from "../../BuyFlow/buyPage";
import { useHistory } from "react-router-dom";

function RootLanding(props) {
  const { classes, navigation } = props;

  const history = useHistory();
  
  return (
    <div className={classes.root}>
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
          >
            Create Market
          </button>
        </div>
        <br></br>
        <div className={classes.stepBox}>
          <button
          onClick={() => {
              
              history.push("/buy");
            }}
            className={classes.btnRight}
            
          >
            View Market
          </button>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(RootLanding);
