import React, { useEffect, useState } from "react";

// Componentes Externos
import { Card } from "./Card";

// ESTILOS
import styles from "../../styles/Preparate.module.css";

function Preparate() {
  const [reto, setReto] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const URL = "http://localhost:3000/challenges/retos";
    const data = await fetch(URL);
    const challenge = await data.json();
    setReto(challenge);
  };

  return (
    <>
      <div>
        {!reto
          ? "Cargando datos, ve tomandote una cerveza"
          : reto.map((info) => {
            const { id } = info;
            return (
              <div key={id}>
                <Card {...info} />;
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Preparate;
