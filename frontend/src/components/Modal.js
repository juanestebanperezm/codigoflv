import React from "react";
import ReactDOM from "react-dom";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  modal: {
    background: "rgba(29, 22, 34, 0.8)",
    position: "fixed",
    top: "-10px",
    left: "-10px",
    right: "-10px",
    bottom: "-10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    zIndex: "2",
  },
});

export default function Modal({ children }) {
  const classes = useStyles();

  return ReactDOM.createPortal(
    <div className={classes.modal}>{children}</div>,
    document.getElementById("login")
  );
}
