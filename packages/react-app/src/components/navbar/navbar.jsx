import React, { useState } from 'react';
import { ethers } from 'ethers';
import styles from "./navbarStyles";
import {withStyles} from "@material-ui/core/styles";

function Navbar(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const {classes} = props;

    const logout = async () => {
        await props.web3modal.clearCachedProvider();
        setTimeout(() => {
            window.location.reload()
        })
    }
    const connect = async () => {
        // const w3mProvider = await props.web3modal.connect();
        // for only Portis:
        const w3mProvider = await props.web3modal.connectTo("portis");
        const provider = new ethers.providers.Web3Provider(w3mProvider);
        setLoggedIn(true);
    }

    console.log("YO IT'S THE CACHED PROVIDER ", props.web3modal.cachedProvider)

    return (
        <nav className={classes.root}>
            <div className={classes.headingContainer}>
                <span className={classes.heading}>NF</span>
                <span className={classes.headingSmall}>ette</span>
            </div>           
            {props.web3modal.cachedProvider || loggedIn === true != "" ? 
                <button className={classes.button} onClick={logout}>Logout</button> :
                <button className={classes.button} onClick={connect}>Connect</button>
            }
            <div className="gradientBorder"></div>
        </nav>
    )
}

export default withStyles(styles)(Navbar);