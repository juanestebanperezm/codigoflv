import React from "react";

// ESTILOS
import styles from "../styles/Lateral.module.css";
import "../styles/js styles/efectos.js";


function Lateral() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.btnAbrir}>
        <span className={styles.arrowL}></span>
      </div>
      <a href="#" className={styles.btn}>
        Unete A la Familia
      </a>
      <span className={styles.line}></span>
      <div>
        <a href="#" className={styles.item}>
          Frontend
        </a>
        <a href="#" className={styles.item}>
          Backend
        </a>
        <a href="#" className={styles.item}>
          Fullstack
        </a>
        <a href="#" className={styles.item}>
          Criptomonedas
        </a>
        <a href="#" className={styles.item}>
          Manage Data
        </a>
        <a href="#" className={styles.item}>
          Habilidades Blandas
        </a>
        <a href="#" className={styles.item}>
          bases de Datos
        </a>
      </div>
    </div>
  );
}
<script>
  console.log("hola mundo");
</script>;

export default Lateral;
