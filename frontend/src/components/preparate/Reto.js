//Modulos
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Componente externo

import styles from "../../styles/Reto.module.css";

import MirrorCode from "./MirrorCode";

function Reto() {
  const { id } = useParams();
  const [{ description, title, language, dificultad }, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const URL = `http://localhost:3000/retos/${id}`;
    const data = await fetch(URL);
    const reto = await data.json();
    console.log("El reto pues: ", reto);
    setData(reto.challenge);
  };

  return (
    <div className={styles["contenedor"]}>
      <div className="navegacion">
        <ul className={styles["ul__reto"]}>
          <li className={styles["li__reto"]}>
            <a className={styles["a__reto"]} href="default.asp">Instrucciones</a>
          </li>
          <li className={styles["li__reto"]}>
            <a className={styles["a__reto"]} href="default.asp">Recursos</a>
          </li>
          <li className={styles["li__reto"]}>
            <a className={styles["a__reto"]} href="default.asp">Soluciones</a>
          </li>
          <li className={styles["li__reto"]}>
            <a className={styles["a__reto"]} href="default.asp">Comentarios</a>
          </li>
        </ul>
      </div>
      <div className={styles["contaner_copy"]}>
        <h1>{title}</h1>
        <p className={styles["descrip"]}>{description}</p>
        <p className={styles["lan"]}>{language}</p>
        <p>{dificultad}</p>
      </div>
      <div className="espejo">
        <MirrorCode />
      </div>
    </div>
  );
}

export default Reto;
