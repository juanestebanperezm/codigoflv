import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    margin: "auto",
  },
  form: {
    width: "75%",
    height: "70vh",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "0 0 5px 5px",
    flexDirection: "column",
    backgroundColor: "rgb(39, 38, 64)",
    boxShadow: "1px 5px 6px 1px rgb(0 0 0 / 20%)",
    "@media (max-width:600px)": {
      width: "92%",
    },
  },
  textField: {
    marginBottom: "10px",
    width: "100%",
    color: "#2EFF22",
  },
  linkRegister: {
    color: "black",
    marginLeft: "3px",
    "&:hover": {
      color: "#212f45",
    },
  },
  image: {
    width: "100%",
  },
  containerForm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    height: "100%",
  },
  titleSection: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "38%",
    height: "55vh",
    borderRight: "1px solid rgba(0,0,0,0.3)",
  },
  fieldsForm: {
    width: "58%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  sectionLink: {
    marginTop: "10px",
  },
  label: {
    color: "white",
  },
});

export default useStyles;