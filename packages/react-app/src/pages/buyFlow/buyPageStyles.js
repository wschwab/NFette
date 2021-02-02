import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
    root: {
        color: "var(--main-black)",
        height: "calc(100vh - 70px)",
        width: "100vw",
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--main-white)",
        position: "absolute",
        top: "90px",
      },
      heading: {
        fontFamily: "var(--plain-font: Roboto)",
        width: '900px',
        textAlign: 'left',
        fontSize: "4rem",
        color: "inherit",
        // width: "75%",
        minWidth: "750px",
        animation: "$fadeIn 1s",
        marginTop: '20px',
        marginBottom: '10px'
      },
      '@keyframes fadeIn': {
        from: {opacity: 0, transform: 'translateY(20px)'},
        to: {opacity: 1, transform: 'translateY(0)'}
      },
      subHeading: {
          width: '900px',
          textAlign: 'left',
          fontSize: "1.5rem",
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