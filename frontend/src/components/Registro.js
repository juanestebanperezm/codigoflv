import React, { useState } from "react";

//Formik validacion, no queremos que metan tapados al backend
import { useFormik } from "formik";
import * as Yup from "yup";

//MUI
import { Button, TextField,Typography } from "@mui/material";
import { Box } from "@material-ui/core";

//Schema de validacion
const validationSchema = Yup.object({
  first: Yup.string()
    .max(20, "Almenos 4 caracteres")
    .required("Nombre requerido"),
  last: Yup.string()
    .max(20, "usar 'nea' como nombre no sirve")
    .required("nimbri riqiridi"),
  email: Yup.string().email("ese correo tan raro").required("es necesario"),
  password: Yup.string().required("obvio necesitas clave"),
  repeat_password: Yup.string().required("obvio necesitas clave"),
});

function Registro() {
  const URL = "http://localhost:3000/usuarios";
  const formik = useFormik({
    initialValues: {
      first: "foo",
      last: "bar",
      email: "foobar@example.com",
      password: "",
      repeat_password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let dataForm = {
        name: {
          first: values.first,
          last: values.last,
        },
        email: values.email,
        password: values.password,
        repeat_password: values.repeat_password,
      };
      alert(JSON.stringify(`${dataForm.name.first} ${dataForm.name.last} Bienvenid@ a Codigo Sancocho`,null,2));
      fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataForm),
      }).then(() => {
        console.log(":)");
      });
      formik.resetForm();
    },
  });

  const divCenter = {
    width: "50%",
    margin: "auto",
    padding: "80px 0px 80px 50px",
  };

  return (
    <div style={divCenter}>
      <Typography sx={{ fontSize: 24,textAlign:"center",margin:3,fontWeight:600 }} color="text.primary" >
        Bievenid@ a Codigo sancocho
      </Typography>
      <Box type="form">
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="first"
            name="first"
            label="Primer Nombre"
            value={formik.values.first}
            onChange={formik.handleChange}
            error={formik.touched.first && Boolean(formik.errors.first)}
            helperText={formik.touched.first && formik.errors.first}
            margin="dense"
          />

          <TextField
            margin="dense"
            fullWidth
            id="last"
            name="last"
            label="Segundo nombre"
            value={formik.values.last}
            onChange={formik.handleChange}
            error={formik.touched.last && Boolean(formik.errors.last)}
            helperText={formik.touched.last && formik.errors.last}
          />

          <TextField
            margin="dense"
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            margin="dense"
            fullWidth
            id="password"
            name="password"
            label="Contraseña"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <TextField
            margin="dense"
            fullWidth
            id="repeat_password"
            name="repeat_password"
            label="Repite la contraseña"
            type="password"
            value={formik.values.repeat_password}
            onChange={formik.handleChange}
            error={
              formik.touched.repeat_password &&
              Boolean(formik.errors.repeat_password)
            }
            helperText={
              formik.touched.repeat_password && formik.errors.repeat_password
            }
          />
          
          <Button color="secondary" variant="contained" type="submit"  fullWidth sx={{marginTop:2}}>
            Registrate
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Registro;
