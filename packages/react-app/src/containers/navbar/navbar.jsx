import React, { useState, useContext, useCallback, useEffect } from "react";
import { Store } from "../../store/store";
import { ReactComponent as Logo } from "../../media/nfette_logo.svg";
import { ReactComponent as WalletIcon } from "../../media/Wallet_Icon.svg";
import { ReactComponent as FlowLogo1 } from "../../media/flow_logo_1.svg";
import { ReactComponent as FlowLogo2 } from "../../media/flow_logo_2.svg";
import { ReactComponent as FlowLogo3 } from "../../media/flow_logo_3.svg";

import { ethers } from "ethers";
import styles from "./navbarStyles";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";

function Navbar(props) {
  const [injectedProvider, setInjectedProvider] = useState({});
  const { state, actions } = useContext(Store);
  const { classes, web3Modal } = props;
  const { walletConnected } = state;
  const walletAddress = state.userAddress ? state.userAddress : "";

  const shortAddress = `${walletAddress.slice(0, 2)}...${walletAddress.slice(walletAddress.length - 6)}`;

  const logoutOfWeb3Modal = async () => {
    await actions.setProvider({});
    await actions.setWalletConnected(false);
    await web3Modal.clearCachedProvider();
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };


  const connectToWallet = async () => {
    if (props.web3Modal.cachedProvider) {
      var w3mProvider = await props.web3Modal.connectTo(web3Modal.cachedProvider);
      await setConnectedState(w3mProvider, actions);
    }
    else{
      var w3mProvider = await props.web3Modal.connect();
      await setConnectedState(w3mProvider, actions);
     
    }
    await props.web3Modal.toggleModal();
 ;
  };

  let currentLogo = <Logo />;

  switch (props.currentStep.id) {
    case "overview":
      currentLogo = <Logo />;
      break;
    case "createNFT":
      currentLogo = <FlowLogo1 />;
      break;
    case "selectPrice":
      currentLogo = <FlowLogo2 />;
      break;
    case "chooseCurve":
      currentLogo = <FlowLogo3 />;
      break;
    case "review":
      currentLogo = <FlowLogo1 />;
      break;
    case "final":
      currentLogo = <FlowLogo2 />;
      break;
    default:
      currentLogo = <Logo />;
      break;
  }

  const flowStart = props.currentStep.id !== 'overview' && props.currentStep.id !== '' && props.currentStep.id != undefined
  const conditionalClassNames = flowStart ? classes.narrowRoot : classes.wideRoot
  const history = useHistory();
  const clickToHome = () => {
    history.push("/");
  };
  
  return (
    <div className={classes.wrapper}>
    <nav className={conditionalClassNames}>
      <div>
        <div className={classes.nfetteLogo} onClick={() => clickToHome()}>{currentLogo}</div>
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
    </div>
  );
}

export default withStyles(styles)(Navbar);
async function setConnectedState(w3mProvider, actions) {
  if (w3mProvider.isPortis) {
    await actions.setProvider(new ethers.providers.Web3Provider(w3mProvider._portis.provider));
    await actions.setWalletAddress(
      w3mProvider._portis._selectedAddress
    );
    await actions.setWalletConnected(true);
  }
  else {
    debugger;
    await actions.setProvider(new ethers.providers.Web3Provider(w3mProvider));
    await actions.setWalletAddress(w3mProvider.selectedAddress);
    await actions.setWalletConnected(true);
  }
}

