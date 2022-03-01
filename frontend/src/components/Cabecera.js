import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from "react-router-dom";
import React from "react";

// Componentes Externos

import Certificado from "./Certificado"
import Cuenta from "./Cuenta"
import Compite from "./Compite"


import Login from "./Login";
import Reto from "./Reto"
import Preparate from "../components/preparate/Preparate";
import Registro from "./Registro";
import RegistroEmpresas from "./RegistroEmpresas";


//ESTILOS

import styles from "../styles/Cabecera.module.css";

function Cabecera() {
  return (
    <BrowserRouter>
      <div >
        <div className={styles.header}>
          <nav>
            <div className={styles.container}>
              <ul className={styles['nav-links']}>
                <li className={styles.logo}>
                  <a>Logo</a>
                </li>
                <li className={styles['nav-link-item']}>
                  <Link to="/preparate">Preparate</Link>
                </li>
                <li className={styles['nav-link-item']}>
                  <Link to="/certificate">Certificado</Link>
                </li>
                <li className={styles['nav-link-item']}>
                  <Link to="/compite">Compite</Link>
                </li>
              </ul>
              <div className={styles.container}>
                <ul className={styles['nav-links']}>
                  <li className={styles['nav-link-item']}>
                    <Link to="/registro">Registro developer</Link>
                  </li>
                  <li className={styles['nav-link-item']}>
                    <Link to="/registroempresa">Para Empresas</Link>
                  </li>
                  <li className={styles['nav-link-item']}>
                    <Link to="/cuenta">Cuenta</Link>
                  </li>
                  <li className={styles['nav-link-item']}>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route exact path="/preparate" element={<Preparate/>}/>
          <Route exact path="/certificate" element={<Certificado/>}/>
          <Route exact path="/compite" element={<Compite/>}/>
          <Route exact path="/reto/:id" element={<Reto/>}/>
          <Route exact path="/cuenta" element={<Cuenta/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/registro" element={<Registro/>}/>
          <Route exact path="/registroempresa" element={<RegistroEmpresas/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Cabecera;