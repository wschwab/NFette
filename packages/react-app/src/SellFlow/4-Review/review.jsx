import React, { useContext, useState } from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Store} from "../../store/store";
import styles from "./reviewStyles";

 function Review(props) {
     const {classes, navigation} = props;
     const {state, actions} = useContext(Store);
    // const [ state, setState ] = useState({});
     const { nftDetails, shareDetails, curveShape, riskProfile} = state;
     const {previous, next} = navigation;
     const handleNext = ()=> {
        actions.createMarket(state);
        next()
     }
    return (
        <div className={classes.root}>
            <div className={classes.modalHeadingContainer}>
                <h2 className={classes.subheading}>3. Review and Create your market</h2>
                <div className="gradientBorder"></div>
            </div>
            <div className={classes.mainContainer}>
                <div className={classes.leftBox}>
                    <div className={classes.leftItem}>Name:</div>
                    <div className={classes.leftItem}>NFt URL: </div>
                    <div className={classes.leftItem}>Max Supply: </div>
                    <div className={classes.leftItem}>Collateral Type: </div>
                    <div className={classes.leftItem}>Curve Type: </div>
                    <div className={classes.leftItem}>ERC20 Name: </div>
                    <div className={classes.leftItem}>ERC20 Symbol: </div>
                    <div className={classes.leftItem}>Interest: </div>
                    <div className={classes.leftItem}>Liquidity Pools: </div>
                </div>
                <div className={classes.rightBox}>
                    <div className={classes.rightItem}>Name {nftDetails.name} </div>
                    <div className={classes.rightItem}>URL {nftDetails.url} </div>
                    <div className={classes.rightItem}>100</div>
                    <div className={classes.rightItem}>USDC</div>
                    <div className={classes.rightItem}>SHAPE{curveShape}</div>
                    <div className={classes.rightItem}>MYNFETTESHARE-01{shareDetails.name}</div>
                    <div className={classes.rightItem}>MYNF{shareDetails.symbol}</div>
                    <div className={classes.rightItem}>7.22%</div>
                    <div className={classes.rightItem}>RiskProfile{riskProfile}</div>
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