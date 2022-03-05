import React from "react";


import logo from "../assets/logo2.png"
import { AppBar, Box, Button, Toolbar, Link, ThemeProvider } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@mui/system";

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

function Cabecera() {
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
          <div className={classes.separator}>
          <Button href="/registro" color="inherit" sx={{
            margin:"auto",
           
            
          }}>Registro</Button>
          <Button href="/registroempresa" color="inherit" sx={{
            margin:"auto",
           
          }}>Empresas</Button>
          <Button href="/cuenta" color="inherit" sx={{
            margin:"auto",
           
          }}>Cuenta</Button>
          <Button href="/login" color="inherit" sx={{
             margin:"auto",
             
          }}>Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}

export default Cabecera;