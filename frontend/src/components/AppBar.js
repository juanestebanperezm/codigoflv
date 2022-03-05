import React, { useState } from "react";


import logo from "../assets/logo2.png"
import { AppBar, Box, Button, Toolbar, Link } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  image: {
    display: "inline",
    minWidth: "120px",
    width: "17%",
    marginBottom: "20px"
  },
  separator: {
    width: "50%"
  }
})


function Cabecera({ openLogin, setOpenLogin }) {

  const classes = useStyles();

  return (
    <Box sx={{ boxShadow: 1 }}>
      <AppBar
        sx={{
          display: "flex",
          height: "6%",
        }}
      >
        <Toolbar>
          <Link href="/" sx={{
            maxWidth: 160,
          }}>
            <img className={classes.image} src={logo} alt="porque mierda ya no hay logo"/>
          </Link>
          <Button href="/preparate" color="inherit" sx={{
            marginBottom: "11px",
            width: "4%",
            marginRight: "1%"
          }}>Preparate</Button>
          <Button href="/certificate" color="inherit" sx={{
            marginBottom: "11px",
            width: "8%",
            marginRight: ".35%"
          }}>Certificado</Button>
          <Button href="/compite" color="inherit" sx={{
            marginBottom: "11px",
            width: "4%"
          }}>Compite</Button>
          <div className={classes.separator}></div>
          <Button href="/registro" color="inherit" sx={{
            marginBottom: "11px",
            marginRight: ".5%",
            width: "11%"
          }}>Registro developer</Button>
          <Button href="/registroempresa" color="inherit" sx={{
            marginBottom: "11px",
            marginRight: ".5%",
            width: "9%"
          }}>Para Empresas</Button>
          <Button href="/cuenta" color="inherit" sx={{
            marginBottom: "11px",
            marginRight: ".5%"
          }}>Cuenta</Button>
          <Button 
            color="inherit"
            onClick={() => {
              openLogin? setOpenLogin(false) : setOpenLogin(true);
              console.log(openLogin)
            }}
            sx={{
              marginBottom: "11px",
            }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Cabecera;