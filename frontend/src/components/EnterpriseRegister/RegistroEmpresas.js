import React, { useState } from "react";

import useStyle from "./RegistroEmpresas.styles";

import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  ImageList,
  ImageListItem,
  Button,
} from "@mui/material";

function RegistroEmpresas() {
  const classes = useStyle();

  return (
    <Box sx={{ width: "210vh", margin: "15vh 5vh" }}>
      <Typography
        variant="h2"
        sx={{ fontWeight: "700" }}
        style={{ textAlign: "center", fontFamily: "fredoka" }}
        component="div"
        gutterBottom
      >
        Los mejores equipos para tus proyectos
        
      </Typography>

      <Typography
        variant="h6"
        sx={{ margin:"0vh 20vh" }}
        style={{ textAlign: "center", fontFamily: "fredoka" }}
        component="div"
        gutterBottom
      >
        Con tan solo unos clics, puedes acceder a nuestros servicios de reclutamiento especializado, donde podras atraer los mejores talentos para conformar los mejores equipos de desarrollo
        
      </Typography>
      
      
        <ImageList className={classes.carrusel} sx={{width:"150vh",overflow:"hidden"}} cols={4} rowHeight={400} >
          {itemData.map((item) => (
            <ImageListItem sx={{margin:"0vh 2vh"}} key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      

        <Box>
          <Card>
            <CardContent>
              <Typography variant="h2" sx={{fontFamily:"fredoka"}}>
                Contrata los mejores equipos y desarrolladores con nosotros
              </Typography>
              <Typography variant="h3" sx={{fontFamily:"fredoka"}} color="secondary">
                Conoce mas sobre nuestros servicios de reclutamiento
              </Typography>
              <Button sx={{margin:"12vh 75vh",width:"50vh"}}  color="secondary" variant="outlined">
                Saber mas
              </Button>
            </CardContent>
          </Card>
        </Box>

    </Box>
  );
}

const itemData = [
  {
    img: "https://w0.peakpx.com/wallpaper/493/677/HD-wallpaper-makima-anime-girl-waifu-chainsaw-man.jpg",
    title: "Breakfast",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/1016/552/HD-wallpaper-mary-saotome-anime-apostar-chica-anime-kakegurui-kakegurui-anime-mona-china-otaku.jpg",
    title: "Burger",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/672/539/HD-wallpaper-sakurajima-mai-anime-cool-kawai-mai-otaku-sakurajima-waifu.jpg",
    title: "Camera",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/110/65/HD-wallpaper-mari-makinami-anime-evangelion-iphone-rebuild.jpg",
    title: "Camera",
  },
];

export default RegistroEmpresas;
