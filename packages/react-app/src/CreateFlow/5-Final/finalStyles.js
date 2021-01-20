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
    top: "120px",
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
    fontWeight: '700',
    margin: "30px auto auto 0px",
  },
  infoBox: {
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
  },
  smallBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "80%",
    height: "100%",
    fontSize: "1.5rem",
    padding: "5px",
    fontWeight: "bold",
  },
  infoDivider: {
      display: 'inline-block',
      width: '2px',
      backgroundColor: 'black',
      margin: '0 1rem',
      height: '8rem',
  },
  divider: {
    width: "100%",
    height: "4px",
    backgroundColor: "black",
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
    height: "15rem",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  address: {
    fontSize: "3rem",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  link: {
    margin: "3rem 0px 0px",
    fontSize: '2rem',
    fontWeight: 200
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
