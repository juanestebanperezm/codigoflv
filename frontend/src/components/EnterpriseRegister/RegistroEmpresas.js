import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useStyle from "./RegistroEmpresas.styles";

function RegistroEmpresas() {
  return (
    <>
      <Box sx={{ width: "200vh", margin: "15vh 5vh" }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "700" }}
          style={{ textAlign: "center", fontFamily: "fredoka" }}
          component="div"
          gutterBottom
        >
          Los mejores equipos
        </Typography>
      </Box>
    </>
  );
}

export default RegistroEmpresas;
