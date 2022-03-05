import React, { useState } from "react";


import logo from "../assets/logo2.png"
import { AppBar, Box, Button, Toolbar, Link, ThemeProvider } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  image: {
    display: "inline",
    minWidth: "120px",
    width: "17%",
    marginBottom: "5px"
  },
  separator: {
    display:"flex",
    width:"30%"
  
  }
})

const OuterTheme=createTheme({
  palette:{
    primary:{
      main:"#212f45"
    }
  }
})

function Cabecera({ openLogin, setOpenLogin }) {

  const classes = useStyles();

  return (
    
      <Box sx={{ boxShadow: 1 }} >
      <AppBar
        sx={{
          display: "flex",
          height: "9%",
          backgroundColor:"#212f45",
          boxSizing:"border-box",
          
        }}
      >
        <Toolbar>
          <Link href="/" sx={{
            maxWidth: 160,
          }}>
            <img className={classes.image} src={logo} alt="porque mierda ya no hay logo"/>
          </Link>
          <Button href="/preparate" color="inherit" sx={{            
            margin:"auto",
            marginRight: "1.5%"
          }}>Preparate</Button>
          <Button href="/certificate" color="inherit"  sx={{
            margin:"auto",
            marginRight: "1%"
          }}>Certificado</Button>
          <Button href="/compite" color="inherit" sx={{
          
            
            margin:"auto"
          }}>Compite</Button>
          <div className={classes.separator}></div>
          <Button href="/registro" color="inherit" sx={{
            margin:"auto",
          
            
          }}>Registro</Button>
          <Button href="/registroempresa" color="inherit" sx={{
            margin:"auto",
          
          }}>Empresas</Button>
          <Button href="/cuenta" color="inherit" sx={{
            margin:"auto",
          
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