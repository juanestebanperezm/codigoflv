import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  containerCertificates: {
    width: "100%",
    height: "100vh",
    marginTop: "5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  containerCards: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "2em",
    padding: "1em",
    marginTop: "2em",
    width: "65%",
    height: "100vh",
  },
  card: {
    width: "100%",
    background: "white",
    boxShadow: "1px 1px 10px 3px rgba(0,0,0, 0.1)",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "boxShadow 0.5s ease",
    border: "1px solid transparent",
    "&:hover": {
      boxShadow: "1px 1px 10px 3px rgba(0,0,0, 0.2)",
      border: "1px solid lightgray",
    },
  },
  titleContent: {
    width: "100%",
    height: "6em",
    borderBottom: "1px solid lightgray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em",
  },
  imageCertificate: {
    width: "3em",
    height: "3em",
    marginLeft: "5px",
    transition: "transform 1s ease",
    "&:hover": {
      transform: "rotate(360deg)",
    },
  },
  textContent: {
    display: "flex",
    height: "8em",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "0.5em",
  },
  buttonCertificate: {
    width: "8em",
    backgroundColor: "#212f45",
    color: "white",
    borderRadius: "10px",
    fontSize: "12px",
    fontFamily: "Fredoka, sans-serif",
    "&:hover": {
      backgroundColor: "#3f5d8d",
    },
  },
  containerButtons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  sancochoLogo: {
    width: "4em",
  },
});

export default useStyles;
