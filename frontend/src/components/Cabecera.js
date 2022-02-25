import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from "react-router-dom";
import React from "react";

//Componentes Externos

import Certificado from "./Certificado"
import Cuenta from "./Cuenta"
import Compite from "./Compite"
import Login from "./Login";
import Preparate from "./Preparate";

//ESTILOS
import "../styles/Cabecera.css";

function Cabecera() {
  return (
    <BrowserRouter>
      <div>
        <div className="header">
          <nav>
            <div className="container">
              <ul className="nav-links">
                <li className="logo">
                  <a>Logo</a>
                </li>
                <li className="nav-link-item">
                  <Link to="/preparate">Preparate</Link>
                </li>
                <li className="nav-link-item">
                  <Link to="/certificate">Certificado</Link>
                </li>
                <li className="nav-link-item">
                  <Link to="/compite">Compite</Link>
                </li>
              </ul>
              <div className="container">
                <ul className="nav-links">
                  <li className="nav-link-item">
                    <Link to="/cuenta">Cuenta</Link>
                  </li>
                  <li className="nav-link-item">
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route exact path="/preparate" element={<Preparate/>}/>
          <Route exact path="/certificado" element={<Certificado/>}/>
          <Route exact path="/compite" element={<Compite/>}/>
          <Route exact path="/cuenta" element={<Cuenta/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Cabecera;
