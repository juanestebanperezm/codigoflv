import React, { useEffect, useState } from "react";

// ESTILOS
import styles from "../styles/Compite.module.css";

function Compite() {
  const URL = "http://localhost:3000/competencias";
  const [competencias, setCompetencia] = useState();
  const fetchApi = async () => {
    const respuesta = await fetch(URL);
    const respuestaJSON = await respuesta.json();
    setCompetencia(respuestaJSON.competences);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className={styles["contenedor"]}>
      <p className={styles["all"]}>Todas las competencias</p>
      <h1 className={styles["campeonatos"]}>Competencias con premios</h1>

      <div className={styles["activas"]}>
        <h2 className={styles["compa"]}>Competencias activas</h2>
        {!competencias
          ? "Cargando competencias"
          : competencias
              .filter((e) => e.state === true)
              .map((comp) => {
                return (
                  <div className={styles["tarjeta"]}>
                    <h3 className={styles["competencia-name"]}>{comp.title}</h3>
                    <p className={styles["competencia-dsc"]}>
                      {comp.description}
                    </p>
                    <div className={styles["botones"]}>
                      <button className={styles["button-64"]} role="button">
                        <span className="text">Ingresar</span>
                      </button>
                    </div>
                  </div>
                );
              })}
      </div>

      <div className={styles["finalizadas"]}>
        <h2 className={styles["compf"]}>Competencias Finalizadas</h2>
        {!competencias
          ? "Cargando, ten paciencia o puedes ir golpeando el computador :D"
          : competencias
              .filter((e) => e.state === false)
              .map((comp) => {
                return (
                  <div className={styles["tarjeta"]}>
                    <h3 className={styles["competencia-name"]}>{comp.title}</h3>
                    <p className={styles["competencia-dsc"]}>
                      {comp.description}
                    </p>
                  </div>
                );
              })}
      </div>
    </div>
  );
}

export default Compite;
