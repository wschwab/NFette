import React from "react";
import styles from "./buyPageStyles";
import {withStyles} from "@material-ui/core/styles";
import Chart from "./priceChart";

function BuyPage(props) {
  const { classes } = props;
  
  return (
    <div className={classes.root}>
      <div className={classes.heading}>Buy Page goes here</div>
      <div className={classes.buyContainer}>
        <div className={classes.leftPanel}>
          
        </div>
        <div className={classes.rightPanel}>
          {/* <Chart /> */}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(BuyPage);