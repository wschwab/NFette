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
    height: "15em",
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
  formControl: {
    width: "80%",
    height: "50%",
  },
  label: {
    margin: "40px 0px 10px",
    fontSize: "2rem",
    textAlign: "left",
  },
  inputContainer: {
    width: "100%",
    height: "80%",
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
  },
  input: {
    border: "2px solid var(--main-black)",
    width: "500px",
    "&:focus": {
      border: "2px solid orange",
    },
    "&::placeholder": {
      color: "var(--main-grey)",
    },
  },
  select: {
    width: "30%",
    padding: "10px",
    borderRadius: "5px",
  },
  description: {
    margin: "2rem 0px",
    width: "450px",
    fontSize: '1.5rem',
    textAlign: 'left',
    fontWeight: 200
  },
  link: {
    margin: "2rem 0px",
    width: "450px",
    fontSize: '2rem',
    textAlign: 'left',
    fontWeight: 200
  },
  btnBar: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    margin: "100px auto 0 0px",
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
