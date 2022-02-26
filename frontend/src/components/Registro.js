import React from "react";

import styles from "../styles/Registro.module.css";

function Registro() {
  return (
    
      <div className={styles["input-fields"]}>
        <label className={styles["chapa"]}>Nickname, apodo, chapa o como queras llamarte</label>
        <input
          type="text"
          placeholder="Nombre de usuario"
          className={styles["inlinein"]}
        ></input>
        <label className={styles["chapa"]}>Correo</label>
        <input
          type="email"
          placeholder="Email"
          className={styles["inlinein"]}
        ></input>
        <label className={styles["chapa"]}>La clave y ojo pone algo bien facil</label>
        <input
          type="password"
          placeholder="Contraseña"
          className={styles["inlinein"]}
        ></input>
        <label className={styles["chapa"]}>Repita la clave</label>
        <input
          type="password"
          placeholder="Confirma tu contraseña"
          className={styles["inlinein"]}
        ></input>
        
        <button className="name noselect">Registrate</button>
      </div>
     
    
  );
}

export default Registro;
