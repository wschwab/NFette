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
    top: "70px",
  },
  heading: {
    fontFamily: "var(--fancy-font)",
    fontSize: "8rem",
    color: "inherit",
    width: "70%",
    minWidth: "750px",
  },
  
  container: {
    marginTop: "50px",
    marginBottom: "50px",
    width: "45%",
    height: "25%",
    minWidth: "750px",
    display: "flex",
  },
  stepBox: {
    width: "20%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    fontFamily: "var(--plain-font)",
    fontSize: "2rem",
    textAlign: "left",
    fontWeight: 500,
    margin: "auto",
  },
  description: {
    margin: '5rem 0rem'
  },
  textfirst: {
    fontSize: "1.5rem",
  },
  textsecond: {
    fontSize: "1.5rem",
    fontWeight: '700'
  },
  text: {
      margin: '2em 0em',
  },
  btnBar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignSelf: "center",
    margin: "100px auto 0px 0px",
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
