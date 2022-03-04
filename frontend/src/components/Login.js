import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import React from "react";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import  "../styles/Login.css"
import marcaAgua from "../assets/codigo-sancocho.png"

//Componentes Anuncios
import AdvertesimentTop from "./advertisement/AdvertesimentTop";


const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    margin: "auto"
  },
  box: {
    width: "75%",
    height: "70vh",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "0 0 5px 5px",
    flexDirection: "column",
    backgroundColor: "lightsteelblue",
    boxShadow: "1px 5px 6px 1px rgb(0 0 0 / 20%)",
    '@media (max-width:600px)':{
      width: "92%",
    }
  },
  textField: {
    width: "100%",
    display: "block",
    justifyContent: "center",
    marginBottom: "20px",
  },
  lineTop:{
    width: "74.8%",
    height: "5px",
    borderRadius: "5px 5px 0 0",
    backgroundColor: "#212f45",
    '@media (max-width:600px)':{
      width: "91.7%",
    }
  },
  linkRegister:{
    color: "black",
    marginLeft: "3px",
    '&:hover':{
      color: "#212f45",
    }
  },
  image:{
    width: "100%",
  }
})
function Login() {
  const classes = useStyles();
  let state = false;
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let passwordText = 'Contraseña';

  return (
   
    <div className={classes.container}>
      <lineTop
        className={classes.lineTop}
      ></lineTop>
      <Box
        component="form"
        className={classes.box}
      >
        <div class="container-form">
          <div class="title-section">
            <img src={marcaAgua} className={classes.image} alt="codigo-sancocho"/>
          </div>
          <div class="fields-form"> 
            <TextField
              error = {state}
              label="Usuario"
              variant="outlined"
              className={classes.textField}
            />
            <FormControl variant="outlined" className={classes.textField}>
            <InputLabel htmlFor="outlined-adornment-password">{passwordText}</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={90}
            />
            </FormControl>
            <Button 
              color="secondary"
              variant="contained" 
              sx={{
                backgroundColor: "#212f45 !important",
                display: "block",
                width: "100%",
              }}
              >Login</Button>
              <div class="section-link">
                <p>Aun no tiene cuenta parce? 
                  <Link to="/Registro" className={classes.linkRegister}>Registrese aqui</Link>
                </p>
              </div>
          </div>
        </div>
        
      </Box>
    </div>
  );
}

export default Login;

