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
        fontSize: "10rem",
        color: "inherit",
        width: "70%",
        minWidth: "750px",
    },
    buyContainer: {
        width: '70%',
        height: "45rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    leftPanel: {
        width: '40%',
    },
    image: {
        height: '20rem',
        width: 'auto',
    },
    rightPanel: {
        textAlign: 'left',
        width: '60%'
    },
    button: {
        color: "var(--main-white)",
    },

})

export default styles;