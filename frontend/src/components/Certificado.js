import React from "react";

// MUI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

function Certificado() {
  return (
   
      <div style={{
        
        padding: '8px 150px 50px 250px'
    }}>
        <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://logos-marcas.com/wp-content/uploads/2021/10/Python-Emblema.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Python
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Certificate en Python 🐍, despues de adquirir 10.000 puntos de
                EXP o convierte en usuario Boost 🚀
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary" variant="contained">
                Certificarse
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                JavaScript
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Certificate en JavaScript 🖥, despues de adquirir 10.000 puntos
                de experiencia o convierte en usuario Boost 🚀
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary" variant="contained">
                Certificarse
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                C++
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Certificate en C++ ➕ ➕ , despues de adquirir 10.000 puntos de
                experiencia o convierte en usuario Boost 🚀
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary" variant="contained">
                Certificarse
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://images.emojiterra.com/google/android-11/512px/1f468-1f4bb.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Estamos trabajando 👷
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Proximamente mas lenguajes y sus certficados 🚧
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary" variant="contained">
                Inicio
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      </div>
  
  );
}

export default Certificado;
