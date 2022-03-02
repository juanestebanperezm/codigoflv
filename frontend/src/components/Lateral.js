import React from "react";
import "../styles/js styles/efectos.js";
import  "../styles/Lateral.css";

function Lateral() {
  return (
    <div className="contenedor">
    <div className="btnCerrar">
      <span className="arrowR"></span>
    </div>
    <div className="btnAbrir">
      <span className="arrowL"></span>
    </div>
    <a href="#" className="btn">
      Unete A la Familia
    </a>
    <span className="line"></span>
    <div>
      <a href="#" className="item">
        Python
      </a>
      <a href="#" className="item">
        JavaScript
      </a>
    </div>
  </div>
  );
}

export default Lateral;
