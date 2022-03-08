import React from "react";
import { Button } from "@material-ui/core";
import logo from "../assets/codigo-sancocho.png";
import useStyles from "./Certificado.styles";

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
