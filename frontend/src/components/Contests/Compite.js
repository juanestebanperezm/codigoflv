import React, { useEffect, useState } from "react";


//MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Compite() {
  const URL = "http://localhost:3000/competencias";
  const [competencias, setCompetencia] = useState();
  const fetchApi = async () => {
    const respuesta = await fetch(URL);
    const respuestaJSON = await respuesta.json();
    setCompetencia(respuestaJSON.competences);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Box sx={{ width: "50%", margin: "auto" }}>
      <Typography>Todas las competencias</Typography>

      <Typography variant="h1" sx={{ fontSize: "3vh", marginTop: "9vh" }}>
        Competencias con premios
      </Typography>

      <Card >
        <Typography
          variant="h5"
          color="secondary"
          sx={{ fontFamily: "fredoka", fontWeight: "700",margin:"1vh 0vh" }}
        >
          Competencias activas
        </Typography>
        {!competencias
          ? "Cargando competencias"
          : competencias
              .filter((e) => e.state === true)
              .map((comp) => {
                return (
                  <CardContent sx={{backgroundColor:"#212f45"}}>
                    <Typography
                      variant="h6"
                      sx={{
                        margin: "1vh 2vh",
                        fontFamily: "fredoka",
                        fontWeight: "600",
                        color:"lightgray"
                      }}
                    >
                      {comp.title}
                    </Typography>
                    <Typography sx={{ margin: "2vh",color:"lightgray" }}>
                      {comp.description}
                    </Typography>

                    <Button
                     variant="contained"
                      color="secondary"
                      role="button"
                      sx={{ margin: "2vh 2vh" }}
                    >
                      Ingresar
                    </Button>
                  </CardContent>
                );
              })}
      </Card>

      <Card sx={{ margin: "3vh" }}>
        <Typography
          variant="h5"
          color="gray"
          sx={{ fontFamily: "fredoka", fontWeight: "600",margin:"1vh 0vh" }}
        >
          Competencias Finalizadas
        </Typography>
        {!competencias
          ? "Cargando, ten paciencia o puedes ir golpeando el computador :D"
          : competencias
              .filter((e) => e.state === false)
              .map((comp) => {
                return (
                  <CardContent sx={{backgroundColor:"#212f45"}}>
                    <Typography
                      sx={{ fontFamily: "fredoka", fontWeight: "600",color:"lightgray" }}
                      variant="h6"
                    >
                      {comp.title}
                    </Typography>
                    <Typography sx={{ margin: "2vh",color:"lightgray" }}>
                      {comp.description}
                    </Typography>
                  </CardContent>
                );
              })}
      </Card>
    </Box>
  );
}

export default Compite;
