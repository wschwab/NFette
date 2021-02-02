import React, { useContext } from "react";
import { Store } from "../../store/store";
import styles from "./buyPageStyles";
import { withStyles } from "@material-ui/core/styles";
import PriceChart from "./priceChart";
import { getMTXBalance, getSharesBalance } from "../../services/balance";
import { providers } from "web3modal";
import TokenDetails from "../../components/tokenDetails/tokenDetails";

function BuyPage(props) {
  const { classes } = props;
  const { state, actions } = useContext(Store);
  const imageUrlExample = "https://www.verdict.co.uk/wp-content/uploads/2020/04/shutterstock_1300066633.jpg";

  return (
    <div className={classes.root}>
      <div className={classes.heading}>Buy and Sell Market $SHARES Tokens</div>
      <div className={classes.subHeading}>
        <em>
          See below the digital liquidity currently being traded on the value of the NFT using the ERC20 price history
          chart at bottom of the page. For more information of the NFT, see description and details.
        </em>
      </div>
      <div className="gradientBorderShrink"></div>
      <div className="gradientBorder"></div>
      <TokenDetails />
      <PriceChart />
    </div>
  );
}     
      
      // <div>
      //   <div>
      //     <h2>Buy {state.tokenDetails.name} Tokens</h2>
      //     <p>Balance: {() => getMTXBalance(state.userAddress, state.collateral.MTX)} MTX</p>
      //     <div  className={classes.buttons}>
      //       <button>Buy</button>
      //     </div>
      //   </div>
      //   <div>
      //     <h2>Sell {state.tokenDetails.name} Tokens</h2>
      //     <p>Balance: {() => getSharesBalance(state.userAddress, state.tokenDetails.contractAddress)} {state.tokenDetails.name}</p>
      //     <div  className={classes.buttons}>
      //       <button>Sell</button>
      //     </div>
      //   </div>
      //   </div>
 

export default withStyles(styles)(BuyPage);
