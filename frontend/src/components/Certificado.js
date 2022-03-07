import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import logo from "../assets/codigo-sancocho.png";

const useStyles = makeStyles({
  containerCertificates: {
    width: "100%",
    height: "100vh",
    marginTop: "5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  containerCards: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "2em",
    padding: "1em",
    marginTop: "2em",
    width: "65%",
    height: "100vh",
  },
  card: {
    width: "100%",
    background: "white",
    boxShadow: "1px 1px 10px 3px rgba(0,0,0, 0.1)",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "boxShadow 0.5s ease",
    border: "1px solid transparent",
    "&:hover": {
      boxShadow: "1px 1px 10px 3px rgba(0,0,0, 0.2)",
      border: "1px solid lightgray",
    },
  },
  titleContent: {
    width: "100%",
    height: "6em",
    borderBottom: "1px solid lightgray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em",
  },
  imageCertificate: {
    width: "3em",
    height: "3em",
    marginLeft: "5px",
    transition: "transform 1s ease",
    "&:hover": {
      transform: "rotate(360deg)",
    },
  },
  textContent: {
    display: "flex",
    height: "8em",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "0.5em",
  },
  buttonCertificate: {
    width: "8em",
    backgroundColor: "#212f45",
    color: "white",
    borderRadius: "10px",
    fontSize: "12px",
    fontFamily: "Fredoka, sans-serif",
    "&:hover": {
      backgroundColor: "#3f5d8d",
    },
  },
  containerButtons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  sancochoLogo: {
    width: "4em",
  },
});

function Certificado() {
  const style = useStyles();
  return (
    <div className={style.containerCertificates}>
      <h1>Certificate con Sancocho</h1>
      <p>
        Certificados mas reales que su socio, solo necesita ser el propio para
        programar y breves.
      </p>
      <div className={style.containerCards}>
        <div className={style.card}>
          <div className={style.titleContent}>
            <h1>Python</h1>
            <img
              className={style.imageCertificate}
              src="http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png"
              alt="python socio"
            />
          </div>
          <div className={style.textContent}>
            <p>
              Certificate en <strong>Python</strong> 🐍, despues de adquirir
              10.000 puntos de EXP o convierte en usuario Boost. 🚀
            </p>
            <div className={style.containerButtons}>
              <Button className={style.buttonCertificate}>Certificate</Button>
              <img
                src={logo}
                alt="y el hpta logo?"
                className={style.sancochoLogo}
              />
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.titleContent}>
            <h1>C++</h1>
            <img
              className={style.imageCertificate}
              src="https://2.bp.blogspot.com/-DrHDBZWMWC0/WyLLvXElCpI/AAAAAAAAACg/BpyMuVGLcaQJ3ur3HgsVqcgZ_di2-Qb1QCLcBGAs/s1600/c-plus-plus-logo.png"
              alt="c++ socio"
            />
          </div>
          <div className={style.textContent}>
            <p>
              Certificate en <strong>C++</strong>, despues de adquirir 10.000
              puntos de experiencia o convierte en usuario Boost 🚀
            </p>
            <div className={style.containerButtons}>
              <Button className={style.buttonCertificate}>Certificate</Button>
              <img
                src={logo}
                alt="y el hpta logo?"
                className={style.sancochoLogo}
              />
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.titleContent}>
            <h1>JavaScript</h1>
            <img
              className={style.imageCertificate}
              src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
              alt="JavaScript socio"
            />
          </div>
          <div className={style.textContent}>
            <p>
              Certificate en <strong>JavaScript</strong> 🖥, despues de adquirir
              10.000 puntos de experiencia o convierte en usuario Boost 🚀
            </p>
            <div className={style.containerButtons}>
              <Button className={style.buttonCertificate}>Certificate</Button>
              <img
                src={logo}
                alt="y el hpta logo?"
                className={style.sancochoLogo}
              />
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.titleContent}>
            <h1>Estamos trabajando 👷</h1>
          </div>
          <div className={style.textContent}>
            <p>Proximamente mas lenguajes y sus certficados 🚧</p>
            <div className={style.containerButtons}>
              <Button className={style.buttonCertificate}>Certificate</Button>
              <img
                src={logo}
                alt="y el hpta logo?"
                className={style.sancochoLogo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificado;
