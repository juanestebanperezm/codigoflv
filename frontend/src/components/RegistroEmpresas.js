import React from "react";

import styles from "../styles/RegistroEmpresas.module.css";


function RegistroEmpresas() {
  return (
    <div>
      <div className={styles["informacion-general"]}>
        <h1 className={styles["titulo"]}>
          Los mejores equipos de desarrollo{" "}
        </h1>
        <p className={styles["parrafos"]}>
          Facilita la adquision de desarrolladores por medio de competencias,
          retos y eventos de codigo
        </p>
      </div>
      <div className={styles["cards"]}>
      </div>
    </div>
  );
}

export default RegistroEmpresas;
