import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  root: {
    color: "var(--main-black)",
    height: "70vh",
    width: "900px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: "5px",
    position: "absolute",
    top: "150px",
    left: "calc(50% - 450px)",
  },
  modalHeadingContainer: {
    height: "10em",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  subheading: {
    fontSize: "3rem",
    textAlign: "left",
    fontWeight: "normal",
    margin: "30px auto auto 0px",
  },
  mainContainer: {
    height: "40em",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    margin: "50px auto",
  },
  leftBox: {
    height: "100%",
    width: "50%",
    borderRight: "2px black solid",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    fontSize: "2rem",
    fontWeight: "300",
  },
  rightBox: {
    height: "100%",
    width: "50%",
    borderLeft: "2px black solid",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: "2rem",
    fontWeight: "600",
  },
  leftItem: {
    margin: "auto 15px auto auto",
  },
  rightItem: {
    margin: "auto auto auto 15px ",
  },
  btnBar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: "0px auto 0 0px",
  },
  btnLeft: {
    fontSize: "1.8rem",
    padding: "20px 0px",
    width: "9em",
    borderRadius: "10px",
    fontFamily: "var(--plain-font)",
    backgroundColor: "var(--main-grey)",
  },
  btnRight: {
    fontSize: "1.8rem",
    padding: "20px 0px",
    width: "10em",
    borderRadius: "10px",
    fontFamily: "var(--plain-font)",
    backgroundColor: "var(--main-grey)",
  },
});

export default styles;
