import React, { useState, useContext, useEffect } from "react";
import { ethers } from "ethers";
import { Store } from "../../store/store";
import styles from "./buyPageStyles";
import { withStyles } from "@material-ui/core/styles";
import PriceChart from "./priceChart";
import { getRARBalance, getSharesBalance, getBuyPrice } from "../../services/balanceAndPrice";
import { buyShareTokens, magicMint, sellShareTokens } from "../../services/token";
// import { providers } from "web3modal";
import { importDetails } from "../../services/importDetails";
import TokenDetails from "../../components/tokenDetails/tokenDetails";

function BuyPage(props) {
  const { classes } = props;
  const {
    state,
    actions,
    state: { provider },
  } = useContext(Store);
  const [balances, setBalances] = useState({
    rar: null,
    shares: null,
    priceForOne: null,
  });
  const [buyAmount, setBuyAmount] = useState(0);
  const [sellAmount, setSellAmount] = useState(0);
  const imageUrlExample = "https://www.verdict.co.uk/wp-content/uploads/2020/04/shutterstock_1300066633.jpg";

  useEffect(() => {
    // magicMint is for local testing purposes
    magicMint(state);
    const url = window.location.href;
    const splitUrl = url.split("/");
    // console.log(splitUrl);
    const marketAddress = splitUrl[splitUrl.length -1];
    // console.log(marketAddress);
    const initialize = async () => {
      await importDetails(marketAddress, state, actions);
      // debugger;
      setBalances({
        rar: await getRARBalance(state.userAddress, state.collateral.RAR, provider),
        shares: await getSharesBalance(state.userAddress, state.tokenDetails.contractAddress, provider),
        priceForOne: await getBuyPrice(1, state.tokenDetails.contractAddress, provider)
      });
    }
    initialize();
    console.log("balances: ", balances);
  }, []);

  const checkIfNumber = (value) => {
    return /^[\d]*\.?[\d]{0,9}$/.test(value);
  };

  const eraseZeroIfFirstNonDecimalDigit = (value) => {
    return /^\d+$/.test(value[1]) ? value.replace(/^0+/, "") : value;
  };
  const handleBuyChange = (e) => {
    let val = eraseZeroIfFirstNonDecimalDigit(e.target.value);
    if (checkIfNumber(val)) {
      setBuyAmount(val);
    }
  };
  const handleSellChange = (e) => {
    let val = eraseZeroIfFirstNonDecimalDigit(e.target.value);
    if (checkIfNumber(val)) {
      setSellAmount(val);
    }
  };

  const handleSubmitBuy = async e => {
    e.target.preventDefault();
    await buyShareTokens(buyAmount);
  }

  const handleSubmitSell = async e => {
    e.target.preventDefault();
    await sellShareTokens(sellAmount);
  };

  return (
    <div className={classes.root}>
      
      <div className="gradientBorderShrink"></div>
      <div className={classes.heading}>Buy and Sell Market $SHARES Tokens</div>
      <div className={classes.subHeading}>
        <em>
          See below the digital liquidity currently being traded on the value of the NFT using the ERC20 price history
          chart at bottom of the page. For more information of the NFT, see description and details.
        </em>
      </div>
      <div className={classes.buyContainer}>
      <div className="gradientBorder"></div>

      <TokenDetails />
      <PriceChart />

      <form className={classes.buyAndSell}>
        <h2>Buy {state.tokenDetails.name} Tokens</h2>
        <p>Balance: {balances.rar} RAR</p>
        <label>Amount to Buy</label>
        <input type="text" onChange={handleBuyChange} value={buyAmount} />
        <div className={classes.buttons}>
          <button type="submit" onSubmit={handleSubmitBuy}>
            Buy
          </button>
        </div>
      </form>
      <form>
        <h2>Sell {state.tokenDetails.name} Tokens</h2>
        <p>
          Balance: {balances.shares} {state.tokenDetails.symbol}
        </p>
        <label>Amount to Sell</label>
        <input type="text" onChange={handleSellChange} value={sellAmount} />
        <div className={classes.buttons}>
          <button button="submit" onSubmit={handleSubmitSell}>
            Sell
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default withStyles(styles)(BuyPage);
