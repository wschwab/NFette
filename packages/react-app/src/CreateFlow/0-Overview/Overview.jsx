import React, { useState} from 'react';
import styles from "./OverviewStyles";
import {withStyles} from "@material-ui/core/styles";
import { CSSTransition } from "react-transition-group";
import { useHistory } from "react-router-dom";

function Overview(props) {
    const {classes, navigation} = props;
    const {go} = navigation;
    const history = useHistory();

    return (
        <div className={classes.root}>
            <div className="gradientBorderTop"></div>
            <div className={classes.heading}>Create a market in <br></br> a new digital economy</div>
            <p className={classes.subHeading}>Create bonded <a href=''>ERC20 tokens</a> from your new NFT <a href=''>(Non-Fungible-Token)</a> and make it available as a tradeable asset on the blockchain, piece by piece.</p>
            <div className={classes.cardWrapper}>
            </div> 
            <div className={classes.stepsContainer}>
                <div className={classes.stepBox}>
                    <span className={classes.text}>1.</span>
                    <p className={classes.text}>{"Place your NFT into the factory"}</p>
                    <span className="gradientBorder"></span>
                </div>
                <div className={classes.stepBox}>
                    <span className={classes.text}>2.</span>
                    <p className={classes.text}>{"Choose your Curve (Price structure)"}</p>
                    <span className="gradientBorder"></span>
                </div>
                <div className={classes.stepBox}>
                    <span className={classes.text}>3.</span>
                    <p className={classes.text}>{"Sell $SHAREs to your shareholders"}</p>
                    <span className="gradientBorder"></span>
                </div>
            </div>
            <div className={classes.btnBar}>
                <button onClick={()=> go("createNFT")} className={classes.btnRight}>Let's go!</button>
            </div>
        </div>
    )
}

export default withStyles(styles)(Overview);