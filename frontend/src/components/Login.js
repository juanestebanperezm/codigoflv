import { Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import { boolean } from "yup";

//Imagenes anuncios

import monachina1 from "../components/advertisement/assets/monachina1.jpg";
import monachina2 from "../components/advertisement/assets/monachina2.jpg"
import monachina3 from "../components/advertisement/assets/monachina3.jpg"

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
    margin: "auto",
    paddingTop: "10%",
  },
  box: {
  },
  textField: {
    display: "block",
    marginBottom: "5px",
  },
})
function Login() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box
        component="form"
        className={classes.box}
      >
        <TextField 
          label="Usuario"
          variant="outlined"
          className={classes.textField}
        />
        <TextField 
          label="Contraseña"
          variant="outlined"
          className={classes.textField}
        />
        <Button 
          variant="contained" 
          sx={{
            display: "block",
            marginTop: "30px"
          }}
          >Login</Button>
      </Box>
    </div>
  );
}

export default Login;
