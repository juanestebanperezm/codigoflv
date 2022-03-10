import React from "react";
import monaChina from "../../styles/assets/monachina.jpg";
import "../../styles/Advertesiment.css";

import Grid from "@mui/material/Grid";

function AdvertesimentLeft() {
  return (
    <Grid >
      <img
        style={{
          width: "15%",
          position: "fixed",
          zIndex: "-1",
          top: "7.5%",
          overflowX: "hidden",
          padding: " 8px 0",
          height:"100vh"
        }}
        src={monaChina}
        alt="Anuncio pa' comer"
      />
    </Grid>
  );
}

export default AdvertesimentLeft;
