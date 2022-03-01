import React from "react";

// ESTILOS
import styles from "../styles/Login.module.css";

//Imagenes anuncios

import monachina1 from "../components/advertisement/assets/monachina1.jpg";
import monachina2 from "../components/advertisement/assets/monachina2.jpg"
import monachina3 from "../components/advertisement/assets/monachina3.jpg"


function Login() {
  return (
    <div>
      <div className={styles["row"]}>
        <div className={styles["column"]}>
          <img width={"250px"} src={monachina1} alt="" />
        </div>
        <div className={styles["column"]}>
          <img width={"250px"} src={monachina2} alt="" />
        </div>
        <div className={styles["column"]}>
          <img width={"250px"} src={monachina3} alt="" />
        </div>
      </div>
      <div className={styles["input-fields"]}>
        <label className={styles["chapa"]}>Nombre de usuario</label>
        <input
          type="text"
          placeholder="Nombre de usuario"
          className={styles["inlinein"]}
        ></input>
        <label className={styles["chapa"]}>Contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          className={styles["inlinein"]}
        ></input>

        <button className={styles["name noselect"]}>Ingresar</button>
      </div>
      <div className={styles["row"]}>
        <div className={styles["column"]}>
          <img width={"250px"} src={monachina1} alt="" />
        </div>
        <div className={styles["column"]}>
          <img width={"250px"} src={monachina2} alt="" />
        </div>
        <div className={styles["column"]}>
          <img width={"250px"} src={monachina3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
