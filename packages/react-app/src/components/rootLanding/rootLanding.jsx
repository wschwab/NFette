import React from "react";
import styles from "./rootLandingStyles";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

function RootLanding(props) {
  const { classes, navigation } = props;
  const history = useHistory();

  return (
    <div className={classes.root}>
      <div className={classes.heading}>Virtually define the value of what is yours. NFette sells, thank us later</div>
      <p className={classes.subHeading}></p>
      <div className={classes.container}>
        <div className={classes.stepBox}>
          <p className={classes.text}>{"Buy and sell available tokens from your favourite artists"}</p>
          <button onClick={() => {
              history.push("/buy")
          }} className={classes.btnRight}>
            Buy
          </button>
          <span className="gradientBorder"></span>
        </div>
        <div className={classes.stepBox}> 
          <p className={classes.text}>{"Create your own NFT here with our easy step-by-step form"}</p>
          <button onClick={() => {
              history.push("/create")
          }} className={classes.btnRight}>
            Create
          </button>
          <span className="gradientBorder"></span>
        </div>
        </div>
    </div>
  );
}

export default withStyles(styles)(RootLanding);
