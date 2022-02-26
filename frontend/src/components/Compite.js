import React from "react";

// ESTILOS
import styles from "../styles/Compite.module.css";

function Compite() {
  return (
    <div className={styles["contenedor"]}>
      <p className={styles["all"]}>Todas las competencias</p>
      <h1 className={styles["campeonatos"]}>Competencias con premios</h1>

      <div className={styles["activas"]}>
        <h2 className={styles["compa"]}>Competencias activas</h2>
        <div className={styles["tarjeta"]}>
          <h3 className={styles["competencia-name"]}>Competencia XyZ</h3>
          <p className={styles["competencia-dsc"]}>
            Te pagamos una noche con la mejor de Mileroticos
            
          </p>
          <div className={styles["botones"]}>
          <button className={styles["button-64"]} role="button"><span class="text">Ingresar</span></button>

          </div>

        </div>
      </div>

      <div className={styles["finalizadas"]}>
        <h2 className={styles["compf"]}>Competencias Finalizadas</h2>
         <div className={styles["tarjeta"]}>
           <h3 className={styles["competencia-name"]}>Codigo Sancocho</h3>
           <p className={styles["competencia-dsc"]}>Ganate una noche en el motel Ibiza West con tu pareja, derecho a un bolson y botella de Buchanans</p>
         </div>
         
      </div>




    </div>
  );
}

export default Compite;
