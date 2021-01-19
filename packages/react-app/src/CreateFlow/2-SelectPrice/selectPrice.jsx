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
    const shortURI = `${state.nftDetails.uri.slice(0, 31)}...`;
    const hasURI = state.nftDetails.uri ? shortURI : '';

    return (
        <div className={classes.root}>
            <div className={classes.modalHeadingContainer}>
            <h2 className={classes.subheading}>2. Set your collateral type and price</h2>
                <div className="gradientBorder"></div>
            </div>
            <div className={classes.infoBox}>
                    <div className={classes.smallBox}>
                        <div>Name: {state.nftDetails.name}</div>
                        <div>NFT Symbol: {state.nftDetails.symbol}</div>
                        <div>URI: {hasURI}</div>
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
                    <span className={classes.description}>You can only use an ERC20 token on the Ethereum Blockchain as a collateral type (or payment).</span>
                    <a href='' className={classes.link}><em>Learn more here</em></a>
                    <label className={classes.label}>Initial Price for ERC20 Token on Market</label>
                    <input className={classes.input} onChange={handleInitialPrice} value={state.initialPrice} name="initialPrice" type="text" />
                    <span className={classes.description}><em>1 {state.tokenDetails.collateralType} = 1 Schrute Buck</em><br></br>One thousand Schrute Bucks equals an extra five minutes for lunch.</span>
                    {/* <span className={classes.description}><em>USD Estimated amount (0.00)</em></span> */}
                    <label className={classes.label}>Maximum number of tokens that can ever be in circulation</label>
                    <input className={classes.input} onChange={handleMaxSupply} value={state.initialPrice} name="maxSupply" type="text" />
                </div>
                <div className={classes.btnBar}>
                    <button onClick={()=> next()} className={classes.btnRight}  >Next</button>
                </div>
            </div>
    )
}

export default withStyles(styles)(SelectPrice);