import { Link } from "react-router-dom";
import React from "react";

//ROUTER

import ROUTES, { RenderRoutes } from "../routes";


//ESTILOS

import styles from "../styles/Cabecera.module.css";

function Cabecera() {
  return (
    <div className={styles.header}>
      <nav>
        <div className={styles.container}>
          <ul className={styles['nav-links']}>
            <li className={styles.logo}>
              Logo
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
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default Cabecera;