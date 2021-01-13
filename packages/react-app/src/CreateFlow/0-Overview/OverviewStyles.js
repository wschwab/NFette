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
    fontSize: "11rem",
    color: "inherit",
    width: "75%",
    minWidth: "750px",
    animation: "$fadeIn 1s",
  },
  '@keyframes fadeIn': {
    from: {opacity: 0, transform: 'translateY(20px)'},
    to: {opacity: 1, transform: 'translateY(0)'}
  },
  subHeading: {
    width: "50%",
    fontSize: "2.5rem",
    fontFamily: "var(--plain-font)",
    margin: '5rem'
  },
  stepsContainer: {
    marginTop: "50px",
    marginBottom: "50px",
    width: "40%",
    height: "150px",
    minWidth: "750px",
    display: "flex",
  },
  stepBox: {
    width: "20%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "flex-start",
    fontFamily: "var(--plain-font)",
    fontSize: "2rem",
    textAlign: "left",
    fontWeight: "500",
    margin: "auto",
  },
  btnBar: {
    width: "60%",
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
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
