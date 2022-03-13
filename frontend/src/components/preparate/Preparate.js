import React, { useEffect, useState } from "react";

// Componentes Externos
import { CardView } from "./Card";

// ESTILOS
import useStyles from "./Preparate.styles"

//MUI
import { Box } from "@mui/system";

function Preparate() {
  const [todos, setReto] = useState([]);

  const classes=useStyles()

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const URL = "http://localhost:3000/retos";
    const response = await fetch(URL);
    const responseJSON = await response.json();
    setReto(responseJSON.challenges);
  };

  return (
    <Box className={classes.caja} >
      {!todos
        ? "Cargando datos, ve tomandote una cerveza"
        : todos.map((info) => {
            const { id } = info;
            return (
              <div key={id}>
                <CardView {...info} />
              </div>
            );
          })}
    </Box>
  );
}

export default Preparate;
