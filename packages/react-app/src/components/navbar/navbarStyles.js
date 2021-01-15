import {createStyles} from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";

const styles = createStyles({
    root: {
        color: "white",
        height: "9rem",
        width: "100%",
        minWidth: "500px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "var(--main-white)",
        margin: "0 auto auto auto",
        position: "absolute",
        overflow: "hidden",
        top: "0",
        position: 'sticky',
        zIndex: 1
    },
    headingContainer: {
        width: "180px",
        height: "100%",
        marginLeft: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: '-3rem'
    },
    nfetteLogo: {
        height: "5rem",
        // margin: "rem",
        alignSelf: 'left',
        cursor: 'pointer',
        position: 'fixed'
    },
    heading: {
        color: "var(--main-white)",
        textTransform: "capitalize",
        fontSize: "4.5rem",
        fontFamily: "var(--plain-font)",
        margin: "auto 1px auto auto",
        fontWeight: "600"
    },
    headingSmall: {
        color: "var(--main-white)",
        fontSize: "3.8rem",
        fontFamily: "var(--fancy-font)",
        margin: "auto auto auto 1px"
    },
    walletButton: {
        fontSize: "2rem",
        margin: "auto 10px auto auto",
        padding: '10px',
        height: "5rem",
        width: "auto",
        fontFamily: "var(--plain-font)",
        // position: "absolute",
        position: "fixed",
        right: "25px",
        borderRadius: "5px",
        backgroundColor: "var(--main-white)",
        fontWeight: '700'
    },

    addressDisplay: {
        fontSize: "1.5rem",
        padding: '10px',
        height: "5rem",
        width: "20rem",
        fontFamily: "var(--plain-font)",
        position: "absolute",
        right: "25px",
        borderRadius: "5px",
        backgroundColor: "var(--main-white)",
        fontFamily: "var(--button-font)",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
})

export default styles;