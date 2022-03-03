import { Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import React from "react";

//Componentes Anuncios
import AdvertesimentTop from "./advertisement/AdvertesimentTop";

const useStyles = makeStyles({});
function Login() {
  const classes = useStyles();

  return (
    <Box
      component="form"
      className={classes.box}
      sx={{
        justifyContent: "center",
        width: "50%",
        margin: "auto",
        paddingTop: "9%",
        display: "grid",
        paddingBottom:"7%"
      }}
    >
      <h1>Ingresa a Codigo Sancocho</h1>
      <TextField
        label="Usuario"
        variant="outlined"
        className={classes.textField}
        margin="dense"
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        className={classes.textField}
        margin="dense"
      />
      <Button
        color="secondary"
        variant="contained"
        sx={{
          display: "block",
          marginTop: "30px",
        }}
      >
        Login
      </Button>
    </Box>
  );
}

export default Login;
