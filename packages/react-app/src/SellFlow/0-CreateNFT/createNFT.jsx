import React, { useContext, useState } from 'react';
// import {Store} from "../../store/store";
import styles from "./createNFTStyles";
import {withStyles} from "@material-ui/core/styles";


function CreateNFT(props) {
    // const {state, actions} = useContext(Store);
    const [ state, setState ] = useState({});
    const {classes, navigation} = props;
    const {next, go} = navigation;

    const handlePrevious = (e)=> {
        e.preventDefault();
        go("landingPage");
    }

    const handleNext = (e) => {
        e.preventDefault();
        next();
    }
    // const formatTokenDetails = (nftName)=> {
    //     const tokenName = `${nftName.toUpperCase()}SHARE-01`;
    //     const tokenSymbol = tokenName.slice(0, 4);
    // }

    const setNFTName = async e => {

    }

    const setTokenName = async e => {

    }

    const setTokenSymbol = async e => {

    }

    const setNFTSymbol = async e => {

    }

    const setNFTUrl = async e => {
        
    }

    const handleNameChange =(e)=> {
        setNFTName(e.target.value)
        setTokenName(e.target.value)
        setTokenSymbol(e.target.value)
    }
    const {name, symbol, url} = state.nftDetails;

    return (
        <div className={classes.root}>
            <div className={classes.modalHeadingContainer}>
            <h2 className={classes.subheading}>0. Create Your new NFT</h2>
                <div className="gradientBorder"></div>
            </div>
            
            <form className={classes.form}>

                <label className={classes.label}  for="name">Name for NFT</label>
                <input onChange={handleNameChange} value={name} className={classes.input} type="text" name="name" placeholder="example: MyCoolNFT"/>

                <label className={classes.label} for="symbol">Symbol for NFT</label>
                <input onChange={(e)=> setNFTSymbol(e.target.value)} value={symbol} className={classes.input} type="text" name="symbol" placeholder="MYCT"/>

                <label  className={classes.label}  for="url">URL</label>
                <input onChange={(e)=> setNFTUrl(e.target.value)} value={url} className={classes.input} type="text" name="url" placeholder="URL"/>

                <div className={classes.btnBar}>
                    <button onClick={handlePrevious} className={classes.btnLeft}  >Back</button>
                    <button onClick={handleNext} className={classes.btnRight}  >Mint</button>
                </div>
                
            </form>
        </div>
    )
}

export default withStyles(styles)(CreateNFT);