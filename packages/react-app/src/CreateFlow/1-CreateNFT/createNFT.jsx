import React, { useContext, useState } from "react";
import { Store } from "../../store/store";
import styles from "./createNFTStyles";
import { withStyles } from "@material-ui/core/styles";

function CreateNFT(props) {
  const { state, actions } = useContext(Store);

  const { classes, navigation } = props;
  const { next, go } = navigation;

  const handlePrevious = e => {
    e.preventDefault();
    go("overview");
  };

  const handleNext = e => {
    e.preventDefault();
    formatTokenDetails();
    next();
  };

  const formatTokenDetails = () => {
    actions.setTokenName(`${state.nftDetails.name}-SHARES`);
    actions.setTokenSymbol(`${state.nftDetails.symbol}-SHARES`);
  };

  const handleNameChange = async e => {
    actions.setNFTName(e.target.value);
  };

  const handleSymbolChange = async e => {
    actions.setNFTSymbol(e.target.value);
  };

  const handleUriChange = async e => {
    actions.setNFTUri(e.target.value);
  };

  // const handleContractAddrChange = async e => {
  //     actions.setNFTContract(e.target.value);
  // }

  return (
    <div className={classes.root}>
      <div className="gradientBorderShrink"></div>
      <div className={classes.modalHeadingContainer}>
        <h2 className={classes.subheading}>1. Name Your New NFT</h2>
        <div className="gradientBorder"></div>
      </div>
      <form className={classes.form}>
        <label className={classes.label} for="name">
          Create your new NFT
        </label>
        <input
          onChange={handleNameChange}
          value={state.nftDetails.name}
          className={classes.input}
          type="text"
          name="name"
          placeholder="example: MyCoolNFT"
        />
        <label className={classes.label} for="symbol">
          Symbol for NFT
        </label>
        <input
          onChange={handleSymbolChange}
          value={state.nftDetails.symbol}
          className={classes.input}
          type="text"
          name="symbol"
          placeholder="MYCT"
        />
        <label className={classes.label} for="uri">
          URI
        </label>
        <input
          onChange={handleUriChange}
          value={state.nftDetails.uri}
          className={classes.input}
          type="text"
          name="url"
          placeholder="URI"
        />
        <span className={classes.description}>
          <em>
            Create a NFT (Non-Fungible Token) and you will be able to apply a unique, immutable, digital identity for
            your work on the blockchain.
          </em>
        </span>
        <a href="" className={classes.link}>
          <em>Learn more here</em>
        </a>
        {/* <label  className={classes.label}  for="contractAddress">OR enter a contract address of a pre-existing NFT contract</label>
            <input onChange={handleContractAddrChange} value={state.nftDetails.address} className={classes.input} type="text" name="address" placeholder="0x..."/> */}
        <div className={classes.btnBar}>
          <button onClick={handleNext} className={classes.btnRight}>
            Create NFT
          </button>
        </div>
      </form>
    </div>
  );
}

export default withStyles(styles)(CreateNFT);
