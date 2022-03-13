import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  carrusel: {
    width: "250vh",
    margin: "10vh 30vh",
  },
  imagen: {
    transition: "all 200ms ease-in",
    filter: "grayscale(1) opacity(.8)",
    "&:hover": {
      filter: "grayscale(0) opacity(1)",
    },
   
  },
});

export default useStyle;
