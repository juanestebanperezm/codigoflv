import React, { useState } from "react";

import logo from "../assets/codigo-sancocho.png";
import { AppBar, Box, Toolbar, Link } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@mui/system";

const useStyles = makeStyles({
  image: {
    width: "8em",
  },
  appBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  containerLogo: {
    display: "flex",
    alignItems: "center",
    width: "15%",
    height: "10vh",
  },
  containerLinks: {
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  links: {
    color: "white !important",
    cursor: "pointer",
    textDecoration: "none !important",
    transition: "color 0.2s ease",
    paddingBottom: "2px",
    borderBottom: "2px solid transparent",
    "&:hover": {
      color: "lightgray !important",
      borderBottom: "2px solid #070617",
    },
  },
});

function Cabecera({ openLogin, setOpenLogin,openRegister,setOpenRegister }) {
  const classes = useStyles();

  return (
    <Box sx={{ boxShadow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: "#212f45",
        }}
      >
        <Toolbar className={classes.appBar}>
          <Link href="/" className={classes.containerLogo}>
            <img
              className={classes.image}
              src={logo}
              alt="porque mierda ya no hay logo"
            />
          </Link>
          <div className={classes.containerLinks}>
            <Link href="/preparate" className={classes.links}>
              Preparate
            </Link>
            <Link href="/certificate" color="inherit" className={classes.links}>
              Certificado
            </Link>
            <Link href="/compite" color="inherit" className={classes.links}>
              Compite
            </Link>
            <Link href="/registroempresa" className={classes.links}>
              Empresas
            </Link>
            <Link href="/cuenta" color="inherit" className={classes.links}>
              Cuenta
            </Link>
            <Link
              href="/registro"
              color="inherit"
              className={classes.links}
              onClick={() => {
                openRegister ? setOpenRegister(false) : setOpenRegister(true);
              }}
            >
              Registro
            </Link>
            <Link
              className={classes.links}
              onClick={() => {
                openLogin ? setOpenLogin(false) : setOpenLogin(true);
              }}
            >
              Login
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Cabecera;
