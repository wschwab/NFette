import React, { useContext, useState } from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Store} from "../../store/store";
import styles from "./reviewStyles";

 function Review(props) {
     const {classes, navigation} = props;
     const {state, actions} = useContext(Store);

     const {previous, next} = navigation;
     
     const handleNext = async () => {
        const result = await actions.createMarket(state);
        console.log(result);
        next();
     }

     const shortURI = `${state.nftDetails.uri.slice(0, 31)}...`;
     const hasURI = state.nftDetails.uri ? shortURI : '';


    return (
        <div className={classes.root}>
            <div className={classes.modalHeadingContainer}>
                <h2 className={classes.subheading}>4. Review and Create your market</h2>
                <div className="gradientBorder"></div>
            </div>
            <div className={classes.mainContainer}>
                <div className={classes.leftBox}>
                    <div className={classes.leftItem}>Name:</div>
                    <div className={classes.leftItem}>NFT URI: </div>
                    <div className={classes.leftItem}>Max Supply: </div>
                    <div className={classes.leftItem}>Collateral Type: </div>
                    <div className={classes.leftItem}>Curve Type: </div>
                    <div className={classes.leftItem}>ERC20 Name: </div>
                    <div className={classes.leftItem}>ERC20 Symbol: </div>
                </div>
                <div className={classes.rightBox}>
                    <div className={classes.rightItem}> {state.nftDetails.name} </div>
                    <div className={classes.rightItem}> {hasURI} </div>
                    <div className={classes.rightItem}> {state.tokenDetails.maxSupply} </div>
                    <div className={classes.rightItem}> {state.tokenDetails.collateralType} </div>
                    <div className={classes.rightItem}>{state.tokenDetails.curveShape}</div>
                    <div className={classes.rightItem}>{state.tokenDetails.name}</div>
                    <div className={classes.rightItem}>{state.tokenDetails.symbol}</div>
                </div>
            </div>
            <div className={classes.btnBar}>
                <button onClick={()=> previous()}  className={`${classes.btnLeft} button`}>Back</button>
                <button onClick={handleNext}  className={`${classes.btnRight} button`}>Create Market</button>
            </div>
        </div>
    )
}

export default withStyles(styles)(Review);