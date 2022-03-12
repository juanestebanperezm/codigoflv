import React from "react";

// ESTILOS
import styles from "../../styles/Cuenta.module.css";

function Cuenta() {

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
      <div className={styles.retos}>
          <h3 className={styles.titulo}>Informacion sobre </h3>
          <div className={styles.cardinfo}>
            <p className={styles.descripcionusuario}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam placeat maxime ea expedita, deserunt aut. Cum voluptatibus sunt nesciunt..</p>
            
          </div>
      </div>
    </div>
  );
}

export default Cuenta;
