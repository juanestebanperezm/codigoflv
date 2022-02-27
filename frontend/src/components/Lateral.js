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
      <div className={styles.btnCerrar}>
        <span className={styles.arrowR}></span>
      </div>
      <a href="#" className={styles.btn}>
        Unete A la Familia
      </a>
      <span className={styles.line}></span>
      <div>
        <a href="#" className={styles.item}>
          JavaScript
        </a>
        <a href="#" className={styles.item}>
          Python
        </a>
        
      </div>
    </div>
  );
}
<script>
  console.log("hola mundo");
</script>;

export default Lateral;
