import React, { useState, useContext, useCallback, useEffect } from "react";
import {Store} from "../../store/store";
import { ReactComponent as Logo } from "../../Media/logo.svg";
import { ReactComponent as WalletIcon } from "../../Media/Wallet_Icon.svg";
import { ethers } from "ethers";
import styles from "./navbarStyles";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";

function Navbar(props) {
  const [blockChainContext, setBlockChainContext] = useState(false);
  const [injectedProvider, setInjectedProvider] = useState({});
  const {state, actions} = useContext(Store);
  const { classes, web3Modal } = props;
  const { walletConnected } = state;
  const walletAddress = state.userAddress ? state.userAddress : ''

  const shortAddress = `${walletAddress.slice(0, 2)}...${walletAddress.slice(
    walletAddress.length - 4
  )}`;

  console.log(props.currentStep)

  const logoutOfWeb3Modal = async () => {
   actions.setProvider({});
    actions.setWalletConnected(false);
    await web3Modal.clearCachedProvider();
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  const connectToWallet = async () => {
    props.web3Modal.connect().then((w3mProvider) => {
      actions.setProvider(w3mProvider);
      actions.setWalletAddress(
        w3mProvider.isPortis
          ? w3mProvider._portis._selectedAddress
          : w3mProvider.selectedAddress
      );
      setBlockChainContext(w3mProvider);
      actions.setWalletConnected(true);
    });
  };

  const history = useHistory();

  const clickToHome = () => {
    history.push("/")
  } 

  return (
    <nav className={classes.root}>
      <div className={classes.headingContainer} onClick={() => clickToHome()}>
          
        <Logo
          className={classes.nfetteLogo}
        />
      </div>
      {walletConnected ? (
        <button className={classes.addressDisplay} onClick={logoutOfWeb3Modal}>
          <WalletIcon />
          {shortAddress}
        </button>
      ) : (
        <button className={classes.walletButton} onClick={connectToWallet}>
          Connect Wallet
        </button>
      )}
    </nav>
  );
}

export default withStyles(styles)(Navbar);
