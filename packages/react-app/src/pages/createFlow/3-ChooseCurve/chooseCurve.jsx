import React, { useContext, useState } from 'react';
import {Store} from "../../../store/store";
import {withStyles} from "@material-ui/core/styles";
import {ReactComponent as Convex} from "../../../media/Convex_Graph.svg";
import {ReactComponent as Linear} from "../../../media/Linear_Graph.svg";
import styles from "./chooseCurveStyles";

 function ChooseCurve(props) {
     const {classes, navigation} = props;
     const {previous, next} = navigation;
     const {state, actions} = useContext(Store);

    const shortAddress = `${state.nftDetails.contractAddress.slice(0, 25)}...`;

    const handleOptionChange = e => {
        actions.setCurve(e.target.value);
    }
     const handlePrevious = (e)=> {
        e.preventDefault();
        previous();
    }
     const handleNext = (e)=> {
        e.preventDefault();
        next();
    }

    return (
        <div className={classes.root}>
            <div className={classes.modalHeadingContainer}>
                <h2 className={classes.subheading}>3. Select a Bonding Curve (Pricing Structure)</h2>
                <div className="gradientBorder"></div>
            </div>
            <div className={classes.mainContainer}>
                <div className={classes.infoBox}>
                    <div className={classes.smallBox}>
                        <div>Name: {state.nftDetails.name}</div>
                        <div>Contract Address: {shortAddress}</div>
                    </div>
                     <div className={classes.infoDivider}></div>
                    <div className={classes.smallBox}>
                        <div>MaxSupply: {state.tokenDetails.maxSupply}</div>
                        <div>Collateral Type: {state.tokenDetails.collateralType}</div>
                    </div>
                </div>
                <div className={classes.graphBoxContainer}>
                    <div className={classes.graphBox}>
                        <h3 className={classes.graphType}>Polynomial</h3>
                        <input className={classes.radio} name="curveOption" value="Polynomial" checked={state.curve.curveShape === "Polynomial"} onChange={handleOptionChange} type="radio" label="Select" />
                        <Convex className={classes.svg} />
                        <p className={classes.description}>
                            <em>
                            Initially low curve with exponential growth in supply over time
                            </em>
                        </p>
                    </div>
                    <div className={classes.graphBox}>
                        <h3 className={classes.graphType}>Linear</h3>
                        <input className={classes.radio} name="curveOption" value="Linear" checked={state.curve.curveShape === "Linear"} onChange={handleOptionChange} type="radio" label="Select" />
                        <Linear className={classes.svg} />
                        <p className={classes.description}>
                            <em>
                            Linear predictable growth direct relationship in supply
                            </em>
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.btnBar}>
                <button onClick={handlePrevious} className={`${classes.btnLeft} button`}>Back</button>
                <button onClick={handleNext}  className={`${classes.btnRight} button`}>Next</button>
            </div>
        </div>
    )
}

export default withStyles(styles)(ChooseCurve);