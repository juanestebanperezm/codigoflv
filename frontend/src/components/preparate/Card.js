import { useNavigate } from "react-router-dom";

//MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//Crear colores
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "#ededed",
  },
  bg_card: {
    backgroundColor: "#212f45",
  },
}));

export const CardView = ({ id, description, title, language, dificultad }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/reto/${id}`);
  };
  
  const classes=useStyles();

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" className={classes.bg_card}>
        <CardContent>
          <Typography
            variant="h5"
            sx={{ fontSize: 30 }}
            gutterBottom
            className={classes.text}
          >
            {title}
          </Typography>
          <Typography component="div" className={classes.text}>
            {description}
          </Typography>
          <Typography sx={{ mb: 0.1 }} className={classes.text}>
            {dificultad} - {language}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={handleClick}
            size="small"
            color="secondary"
            variant="contained"
          >
            Ir al reto
          </Button>
        </CardActions>
      </Card>
      <br />
    </Box>
  );
};
