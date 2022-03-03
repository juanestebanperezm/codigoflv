import React from 'react'

import Error from "../assets/notFound.png"

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  img: {
    display: "flex",
    justifyContent: "center",
    padding: "8%"
  }
})

export default function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.img}>
      <img src={Error} alt="404 Page Not Found.
      Papi, hay un error en la ruta, además que la imagen no carga, estamos jodidos"/>
    </div>
  )
}
