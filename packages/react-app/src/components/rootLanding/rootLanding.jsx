import React from "react";
import styles from "./rootLandingStyles";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

function RootLanding(props) {
  const { classes, navigation } = props;

  const history = useHistory();

  return (
    <div className={classes.root}>
      <div className={classes.heading}>Virtually define the value of what is YOURS.</div>
      <div className={classes.description}>
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
              
              history.push("/buy");
            }}
            className={classes.btnRight}
          >
            View Market
          </button>
          {/* <span className="gradientBorder"></span> */}
        </div>
        <div className={classes.stepBox}>
          <button
            onClick={() => {
             
              history.push("/create");
            }}
            className={classes.btnRight}
          >
            Create Market
          </button>
          {/* <span className="gradientBorder"></span> */}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(RootLanding);
