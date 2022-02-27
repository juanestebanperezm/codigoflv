import React from "react";

// ESTILOS
import styles from "../styles/Login.module.css";

function Login() {
  return (
    <div className={styles["fondo"]}>
      <div className={styles["input-fields"]}>
        <label className={styles["chapa"]}>
          Nombre de usuario
        </label>
        <input
          type="text"
          placeholder="Nombre de usuario"
          className={styles["inlinein"]}
        ></input>
        <label className={styles["chapa"]}>
         Contraseña
        </label>
        <input
          type="password"
          placeholder="Contraseña"
          className={styles["inlinein"]}
        ></input>
        

        <button className={styles["name noselect"]}>Ingresar</button>
      </div>
    </div>
  );
}

export default Login;
