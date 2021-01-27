import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  wideRoot: {
    color: "white",
    height: "70px",
    width: "95%",
    minWidth: "500px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "var(--main-white)",
    margin: "1em auto auto auto",
    position: "absolute",
    overflow: "hidden",
    top: "0",
  },
  narrowRoot: {
    alignSelf: "center",
    color: "white",
    height: "70px",
    width: "900px",
    minWidth: "500px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "var(--main-white)",
    margin: "1em auto auto auto",
    position: "absolute",
    overflow: "hidden",
    top: "0",
    animation: "$fadeIn 2.5s",
  },
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
  nfetteLogo: {
    width: "100%",
    margin: "auto",
  },
  heading: {
    color: "var(--main-white)",
    textTransform: "capitalize",
    fontSize: "4.5rem",
    fontFamily: "var(--plain-font)",
    margin: "auto 1px auto auto",
    fontWeight: "600",
  },
  headingSmall: {
    color: "var(--main-white)",
    fontSize: "3.8rem",
    fontFamily: "var(--fancy-font)",
    margin: "auto auto auto 1px",
  },
  button: {
    margin: "auto 10px auto auto",
    height: "25px",
    width: "75px",
    fontFamily: "var(--plain-font)",
    position: "absolute",
    top: "calc(50% - 12.5px)",
    right: "25px",
    borderRadius: "5px",
    backgroundColor: "var(--main-grey)",
    fontFamily: "var(--button-font)",
  },
  addressDisplay: {
    backgroundColor: "var(--main-white)",
    width: '15rem',
    fontSize: "1.5rem",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  walletButton: {
    backgroundColor: "var(--main-white)",
    fontSize: "2rem",
  },  
})

export default styles;
