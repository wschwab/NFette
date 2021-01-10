import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  root: {
    color: "var(--main-black)",
    width: "900px",
    height: "70vh",
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
    height: "50%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "20px auto",
  },
  messageBox: {
    height: "23rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: "2.3rem",
    top: "200px",
  },
  innerBox: {
    width: "80%",
    height: "100px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  address: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  divider: {
    width: "100%",
    height: "4px",
    backgroundColor: "black",
  },
  description: {
    fontSize: "2rem",
    marginTop: "10px",
  },
  btnBar: {
    width: "100%",
    display: "flex",
    marginTop: "20px",
    justifyContent: "center",
  },
  middle: {
    fontSize: "1.8rem",
    padding: "20px 0px",
    width: "9em",
    borderRadius: "10px",
    fontFamily: "var(--plain-font)",
    backgroundColor: "var(--main-grey)",
  },
});

export default styles;
