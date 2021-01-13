import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  root: {
    color: "var(--main-black)",
    height: "calc(100vh - 70px)",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--main-white)",
    position: "absolute",
    top: "90px",
  },
  heading: {
    fontFamily: "var(--fancy-font)",
    fontSize: "6rem",
    color: "inherit",
    width: "70%",
    minWidth: "750px",
    fontWeight: "lighter",
  },
  subHeading: {
    margin: "5rem 0rem",
  },
  textfirst: {
    fontSize: "2.5rem",
  },
  textsecond: {
    fontSize: "2.5rem",
    fontWeight: "700",
  },
  text: {
    margin: "2em 0em",
  },
  container: {
    margin: "0px 0px 50px",
    padding: "0px 100px",
    width: "20%",
    height: "10%",
    minWidth: "750px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  stepBox: {
    width: "9em",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--plain-font)",
    fontSize: "2rem",
    textAlign: "left",
    fontWeight: 500,
    margin: "auto",
  },
  btnLeft: {
    fontSize: "1.8rem",
    padding: "20px 0px",
    width: "11em",
    borderRadius: "10px",
    fontFamily: "var(--plain-font)",
    backgroundColor: "var(--main-grey)",
    alignSelf: "right",
  },
  btnRight: {
    fontSize: "1.8rem",
    padding: "20px 0px",
    width: "11em",
    borderRadius: "10px",
    fontFamily: "var(--plain-font)",
    backgroundColor: "var(--main-grey)",
    alignSelf: "left",
  },
  y: {
    marginLeft: "1rem",
    color: "#FF8D10",
  },
  o: {
    color: "#C9F553",
  },
  u: {
    color: "#FE4DA5",
  },
  r: {
    color: "#FFD215",
  },
  s: {
    color: "#FF4DA6",
  },
});

export default styles;
