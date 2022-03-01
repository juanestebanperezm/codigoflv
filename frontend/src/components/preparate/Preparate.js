import React, { useEffect, useState } from "react";


// Componentes Externos
import { Card } from "./Card";

// ESTILOS
import styles from "../../styles/Preparate.module.css";


function Preparate() {
  const [todos, setReto] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const URL = "http://localhost:3000/retos";
    const response = await fetch(URL);
    const responseJSON = await response.json();
    setReto(responseJSON.challenges);
  };



  return (
    
      <div className={styles["container"]}>
        {!todos
          ? "Cargando datos, ve tomandote una cerveza"
          : todos.map((info) => {
              const { id } = info;
              return (
                <div key={id}>
                  <Card {...info} />
                </div>
              );
            })}
      </div>
   
  );
}

export default Preparate;