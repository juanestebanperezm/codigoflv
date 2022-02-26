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
          JavaScript
        </a>
        <a href="#" className={styles.item}>
          Python
        </a>
        <a href="#" className={styles.item}>
          C# Proximamente
        </a>
        <a href="#" className={styles.item}>
          Java Proximamente
        </a>
        <a href="#" className={styles.item}>
          C++ Proximamente
        </a>
        <a href="#" className={styles.item}>
          SQL Proximamente
        </a>
        <a href="#" className={styles.item}>
          Php Proximamente
        </a>
      </div>
    </div>
  );
}
<script>
  console.log("hola mundo");
</script>;

export default Lateral;
