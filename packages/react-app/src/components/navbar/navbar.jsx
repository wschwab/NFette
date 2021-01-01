import React, { useState, useContext, useCallback, useEffect } from "react";
import {Store} from "../../store/store";
import { ReactComponent as Logo } from "../../Media/logo.svg";
import { ethers } from "ethers";
import styles from "./navbarStyles";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Portis from "@portis/web3";

import { INFURA_ID } from "../../constants";

function Navbar(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [injectedProvider, setInjectedProvider] = useState(undefined);
  const [web3modal, setWeb3Modal] = useState({ cachedProvider: false });

  const {state, actions} = useContext(Store);
  const { classes } = props;

  // const loadWeb3Modal = useCallback(async () => {
  //   const provider = await web3Modal.connect();
  //   setInjectedProvider(new Web3Provider(provider));
  // }, [setInjectedProvider]);

  // const logoutOfWeb3Modal = async () => {
  //   await web3Modal.clearCachedProvider();
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 1);
  // };

  useEffect(() => {
    const w3m = new Web3Modal({
      // network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions: {
        // walletconnect: {
        //   package: WalletConnectProvider, // required
        //   options: {
        //     infuraId: INFURA_ID,
        //   },
        // },
        portis: {
          package: Portis,
          options: {
            id: "f5c8dbd5-f553-4641-943e-9223c9e65a0a",
          },
        }
      },
    });
    setWeb3Modal(w3m);
    // if (web3Modal.cachedProvider) {
    //   loadWeb3Modal();
    // }
  }, []);

  const history = useHistory();
  const clickToHome = () => {
    history.push("/")
  } 

  const logout = async () => {
    await web3modal.clearCachedProvider();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  const connect = async () => {
    const w3mProvider = await web3modal.connect();
    // for only Portis:
    // const w3mProvider = await web3modal.connectTo("portis");
    const provider = new ethers.providers.Web3Provider(w3mProvider);
    
    // this may be a really bad idea - I'm updating cachedProvider manually
    setWeb3Modal({
      ...web3modal,
      cachedProvider: true
    })
    setLoggedIn(true);
  };

  // console.log("YO IT'S THE CACHED PROVIDER ", props.web3modal.cachedProvider);

  return (
    <nav className={classes.root}>
      <div className={classes.headingContainer} onClick={() => clickToHome()}>
        <Logo
          className={classes.nfetteLogo}
        />
      </div>
      {web3modal.cachedProvider || (loggedIn === true) != "" ? (
        <button className={classes.button} onClick={logout}>
          Logout
        </button>
      ) : (
        <button className={classes.button} onClick={connect}>
          Connect
        </button>
      )}
      <div className="gradientBorder"></div>
    </nav>
  );
}

export default withStyles(styles)(Navbar);
