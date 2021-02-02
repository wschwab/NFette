import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    infoBox: {
        width: "900px",
        height: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: '1rem',
        paddingBottom: '1rem'
      },
      smallBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "50%",
        height: "100%",
        fontSize: "1.5rem",
        padding: "5px",
        fontWeight: "bold",
        textAlign: 'left'
      },
      infoDivider: {
        display: 'inline-block',
        width: '2px',
        backgroundColor: 'black',
        margin: '0 1rem',
        height: '5rem',
      },
})

export default styles;