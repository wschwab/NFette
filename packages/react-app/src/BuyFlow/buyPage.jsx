import React from "react";
import styles from "./buyPageStyles";
import {withStyles} from "@material-ui/core/styles";

function BuyPage(props) {
  const { classes } = props;
  
  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        Buy page will go here
      </div>
    </div>
  );
}

export default withStyles(styles)(BuyPage);