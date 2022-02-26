import React from "react";
import "../styles/Lateral.css";
import "../styles/js styles/efectos.js";




function Lateral() {
  return (
    <div className="contenedor">
      <div className="btnAbrir">
        <span className="arrowL"></span>
      </div>
      <div className="btnCerrar">
        <span className="arrowR"></span>
      </div>
      <a href="#" className="btn">
        Unete A la Familia
      </a>
      <span className="line"></span>
      <div>
        <a href="#" className="item">
          Frontend
        </a>
        <a href="#" className="item">
          Backend
        </a>
        <a href="#" className="item">
          Fullstack
        </a>
        <a href="#" className="item">
          Criptomonedas
        </a>
        <a href="#" className="item">
          Manage Data
        </a>
        <a href="#" className="item">
          Habilidades Blandas
        </a>
        <a href="#" className="item">
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
