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
        marginBottom: '20px'
      },
      '@keyframes fadeIn': {
        from: {opacity: 0, transform: 'translateY(20px)'},
        to: {opacity: 1, transform: 'translateY(0)'}
      },
      subHeading: {
          width: '900px',
          textAlign: 'left',
          fontSize: "1.5rem",
          marginBottom: '20px'
      },
    buyContainer: {
        width: '900px',
        height: "40rem",
    },
    leftPanel: {
        width: '40%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        // alignItems: "center",
    },
    image: {
        height: 'auto',
        width: '90%',
    },
    buyAndSell: {
        
    },
    rightPanel: {
        textAlign: 'left',
        width: '60%',
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "flex-start",
    },
    functionPlot: {
        width: '200px',
        height: '200px',
    },
    button: {
        color: "var(--main-white)",
    },

})

export default styles;