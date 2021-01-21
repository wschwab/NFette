import React, { useState, useContext, useCallback, useEffect } from "react";
import { Store } from "../../store/store";
import { ReactComponent as Logo } from "../../Media/NfetteLogo.svg";
import { ReactComponent as WalletIcon } from "../../Media/Wallet_Icon.svg";
import { ReactComponent as FlowLogo1 } from "../../Media/flow_logo_1.svg";
import { ReactComponent as FlowLogo2 } from "../../Media/flow_logo_2.svg";
import { ReactComponent as FlowLogo3 } from "../../Media/flow_logo_3.svg";

import { ethers } from "ethers";
import styles from "./navbarStyles";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";

function Navbar(props) {
  const [blockChainContext, setBlockChainContext] = useState(false);
  const [injectedProvider, setInjectedProvider] = useState({});
  const { state, actions } = useContext(Store);
  const { classes, web3Modal } = props;
  const { walletConnected } = state;
  const walletAddress = state.userAddress ? state.userAddress : "";

  const shortAddress = `${walletAddress.slice(0, 2)}...${walletAddress.slice(walletAddress.length - 4)}`;

  const logoutOfWeb3Modal = async () => {
    actions.setProvider({});
    actions.setWalletConnected(false);
    await web3Modal.clearCachedProvider();
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  const connectToWallet = async () => {
    props.web3Modal.connect().then(w3mProvider => {
      actions.setProvider(new ethers.providers.Web3Provider(w3mProvider));
      actions.setWalletAddress(
        w3mProvider.isPortis ? w3mProvider._portis._selectedAddress : w3mProvider.selectedAddress,
      );
      setBlockChainContext(w3mProvider);
      actions.setWalletConnected(true);
    });
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
