import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  root: {
    width: "40rem",
    height: "27rem",
    margin: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center'
   
  },
  titleWrapper: {
    width: "17rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    fontSize: "3rem",
  },
  icon: {
    height: "4rem",
  },
  buyBtn: {
    width: "4rem",
    fontSize: "2rem",
    alignSelf: 'center'
  },
});

export default styles;
