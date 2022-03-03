import { Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import React from "react";

//Componentes Anuncios
import AdvertesimentTop from "./advertisement/AdvertesimentTop";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "50%",
    margin: "auto",
    paddingTop: "3%",
    
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
        
        
         
        <h1>Ingresa a Codigo Sancocho</h1>
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
        color="secondary"
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
