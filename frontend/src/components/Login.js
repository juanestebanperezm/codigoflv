import React, { useState } from "react";

import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Button, withStyles } from "@mui/material";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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
    '@media (max-width:600px)':{
      width: "92%",
    }
  },
  textField: {
    marginBottom: "10px",
    width: "100%",
    color: "#2EFF22"
  },
  linkRegister: {
    color: "black",
    marginLeft: "3px",
    '&:hover':{
      color: "#212f45",
    }
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
    marginTop: "10px"
  },
  label: {
    color: "white"
  }
})

function Login({ openLogin, setOpenLogin }) {
  const classes = useStyles();
  let state = false;

  const [user, setUser] = useState("")

  const [password, setPassword] = useState({
      password: '',
      showPassword: false,
  });

  const handleChangePassword = (event) => {
    setPassword({ ...password, password: event.target.value });
  };

  const handleChangeUser = (event) => {
    setUser(event.target.value);
  };

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  return (
    <Box className={classes.container}>
      <Box
        className={classes.form}
      >
        <Box className={classes.containerForm}>
          <Box className={classes.titleSection}>
            <img src={marcaAgua} className={classes.image} alt="codigo-sancocho"/>
          </Box>
          <Box className={classes.fieldsForm}>
            <FormControl variant="outlined" className={classes.textField}>
              <InputLabel className={classes.label}>Usuario</InputLabel>
              <OutlinedInput
                type="text"
                value={user.value}
                onChange={handleChangeUser}
                labelWidth={90}
              />
            </FormControl>
            <FormControl variant="outlined" className={classes.textField}>
              <InputLabel className={classes.label}>Contraseña</InputLabel>
              <OutlinedInput
                type={password.showPassword ? 'text' : 'password'}
                value={password.password}
                onChange={handleChangePassword}
                labelWidth={90}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {password.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                
              />
            </FormControl>
            <Button 
              color="primary"
              variant="contained" 
              sx={{
                backgroundColor: "#0b525b !important",
                display: "block",
                width: "100%",
                marginTop: "10px"
              }}
              >Login</Button>
              <Box className={classes.sectionLink}>
                <Box component="p">¿Aún no tiene cuenta parce? 
                  <Link to="/Registro" className={classes.linkRegister}onClick={
                    () => {
                      openLogin? setOpenLogin(false) : setOpenLogin(true);
                      console.log(openLogin)
                    }}>Regístrese aquí</Link>
                </Box>
              </Box>
          </Box>
        </Box>        
      </Box>
    </Box>
  );
}

export default Login;