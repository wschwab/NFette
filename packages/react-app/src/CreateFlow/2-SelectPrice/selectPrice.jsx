import React, { useContext, useState } from 'react';
import {Store} from "../../store/store";
import styles from "./selectPriceStyles";
import {withStyles} from "@material-ui/core/styles";


function SelectPrice(props) {
    const {state, actions} = useContext(Store);

    const {classes, navigation} = props;
    const {next, previous} = navigation;

    const handleCollateral = async e => {
        actions.setCollateralType(e.target.value);
    }

    const handleInitialPrice = async e => {
        actions.setInitialPrice(e.target.value);
    }

    const handleMaxSupply = async e => {
        actions.setMaxSupply(e.target.value);
    }
    
    return (
        <div className={classes.root}>
            <div className={classes.modalHeadingContainer}>
            <h2 className={classes.subheading}>2. Set Token Details</h2>
                <div className="gradientBorder"></div>
            </div>
            <div className={classes.infoBox}>
                    <div className={classes.smallBox}>
                        <div>Name: {state.nftDetails.name}</div>
                        <div>NFT Symbol: {state.nftDetails.symbol}</div>
                        <div>URI: {state.nftDetails.uri}</div>
                    </div>
                </div>
                <div className={classes.inputContainer}>
                    <label className={classes.label}>Collateral Type accepted</label>
                    <select className={classes.select} name="collateral type" value={state.collateralType} onChange={handleCollateral}>
                    <option value="" selected></option>
                        <option value="DAI" >DAI</option>
                         <option value="USDC" >USDC</option>
                        <option value="ETH">ETH</option>
                    </select>
                    <label className={classes.label}>Initial Price for ERC20 Token on Market</label>
                    <input className={classes.input} onChange={handleInitialPrice} value={state.initialPrice} name="initialPrice" type="text" />
                    <label className={classes.label}>Maximum number of tokens that can ever be in circulation</label>
                    <input className={classes.input} onChange={handleMaxSupply} value={state.initialPrice} name="maxSupply" type="text" />
                </div>
                

                <div className={classes.btnBar}>
                    <button  onClick={()=> previous()}  className={classes.btnLeft}  >Back</button>
                    <button onClick={()=> next()} className={classes.btnRight}  >Next</button>
                </div>
            </div>
    )
}

export default withStyles(styles)(SelectPrice);