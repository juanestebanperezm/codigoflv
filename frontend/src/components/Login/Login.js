import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Box } from "@material-ui/core";
import { Button, TextField } from "@mui/material";

import marcaAgua from "../../assets/codigo-sancocho.png";

import useStyles from "./Login.styles";

//Manejo de estado
import { login, reset } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";

//router dom
import { useNavigate } from "react-router-dom";

function Login({ openLogin, setOpenLogin }) {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert("Error al ingresar el usuario o contraseña son invalidos");
    }

    if (isSuccess || user) {
      navigate("/preparate");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <h1>:)</h1>;
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.form}>
        <Box className={classes.containerForm}>
          <Box className={classes.titleSection}>
            <img
              src={marcaAgua}
              className={classes.image}
              alt="codigo-sancocho"
            />
          </Box>
          <Box className={classes.fieldsForm}>
            <form onSubmit={onSubmit}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                sx={{
                  marginBottom: "15px",
                }}
                value={email}
                onChange={onChange}
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                sx={{
                  marginBottom: "15px",
                }}
                value={password}
                onChange={onChange}
              />
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Ingresar
              </Button>
            </form>
            <Box className={classes.sectionLink}>
              <Box component="p">
                ¿Aún no tiene cuenta parce?
                <Link
                  to="/Registro"
                  className={classes.linkRegister}
                  onClick={() => {
                    openLogin ? setOpenLogin(false) : setOpenLogin(true);
                    console.log(openLogin);
                  }}
                >
                  Regístrese aquí
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
