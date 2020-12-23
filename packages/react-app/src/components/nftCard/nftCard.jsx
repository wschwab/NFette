import React from "react";
import styles from "./nftCardStyles";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as Logo } from "../../Media/rings.svg";

function NftCard(props) {

  const { classes } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <Logo className={classes.icon} />
          <div className={classes.titleWrapper}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.symbol}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.title}
          </Typography>
          </div>
        </div>
        <Typography variant="h5" component="h2">
        {props.name}
        </Typography>
      </CardContent>
      <Button className={classes.buyBtn} size="large">BUY</Button>
    </Card>
  );
}

export default withStyles(styles)(NftCard);
