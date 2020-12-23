import React from "react";
import NftCard from "../components/nftCard/nftCard";
import styles from "./availableMaketsStyles";
import {withStyles} from "@material-ui/core/styles";

function AvailableMarkets(props) {
  const { classes } = props;
  
  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        View & buy available NFT's
      </div>
      <div className={classes.cardWrapper}>
        {/* these are only examples fo props*/}
        <NftCard symbol='ADE' title='Title 1' name='John Doe'/>
        <NftCard symbol='HFE' title='Title 2' name='John Doe'/>
        <NftCard symbol='UJS' title='Title 3' name='John Doe'/>
        <NftCard symbol='YHE' title='Title 4' name='John Doe'/>
        <NftCard symbol='YFI' title='Title 5' name='John Doe'/>
        <NftCard symbol='NAS' title='Title 6' name='John Doe'/>
      </div>
    </div>
  );
}

export default withStyles(styles)(AvailableMarkets);
