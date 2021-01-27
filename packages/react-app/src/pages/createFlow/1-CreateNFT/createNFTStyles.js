import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  root: {
    color: "var(--main-black)",
    height: "70vh",
    width: "900px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
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
    fontWeight: "700",
    margin: "30px auto auto 0px",
  },
  gradientBorder: {
    animation: "$animation 3s"
  },
  '@keyframes animation': {
    from: {opacity: 0, transform: 'scale(0)'},
    to: {opacity: 1, transform: 'scale(1)'}
  },
  form: {
    height: "80%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "flex-start",
  },
  label: {
    margin: "30px 0px 10px",
    fontSize: "2rem",
  },
  input: {
    border: "2px solid var(--main-black)",
    width: "500px",
    borderRadius: "5px",
  },
  description: {
    margin: "2rem 0px",
    width: "450px",
    fontSize: "1.5rem",
    textAlign: "left",
    fontWeight: 200,
  },
  link: {
    margin: "2rem 0px",
    width: "450px",
    fontSize: "2rem",
    textAlign: "left",
    fontWeight: 200,
  },
  btnBar: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "center",
    margin: "30px auto 0px 0px",
  },
  btnLeft: {
    fontSize: "1.8rem",
    padding: "20px 0px",
    width: "9em",
    borderRadius: "10px",
    fontFamily: "var(--plain-font)",
    backgroundColor: "var(--main-grey)",
  },
  btn: {
    fontSize: "1.8rem",
    padding: "20px 0px",
    width: "10em",
    borderRadius: "10px",
    fontFamily: "var(--plain-font)",
    backgroundColor: "var(--main-grey)",
  },
  btnFaded: {
    fontSize: "1.8rem",
    opacity: '0.4',
    padding: "20px 0px",
    width: "10em",
    borderRadius: "10px",
    fontFamily: "var(--plain-font)",
    backgroundColor: "var(--main-grey)",
  },
});

export default styles;
