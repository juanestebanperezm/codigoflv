import React, { useState } from "react";

import { Link } from "react-router-dom";

import * as Yup from "yup";
import { Box } from "@material-ui/core";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";

import marcaAgua from "../assets/codigo-sancocho.png";

import useStyles from "./Login.styles";

const LoginValidation = Yup.object({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function Login({ openLogin, setOpenLogin }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const classes = useStyles();

  //Contraseñas
  const [password, setPassword] = useState({
    showPassword: false,
  });

  const handleChangePassword = (event) => {
    setPassword({ ...password, password: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

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
            <form>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                sx={{
                  marginBottom: "15px",
                }}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
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
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
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
