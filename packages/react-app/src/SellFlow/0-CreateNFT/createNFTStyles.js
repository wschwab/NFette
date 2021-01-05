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
    "&:focus": {
      border: "2px solid orange",
    },
    "&::placeholder": {
      color: "var(--main-grey)",
    },
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
