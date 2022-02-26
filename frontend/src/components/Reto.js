//Modulos
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

//Componente externo

import MirrorCode from "./MirrorCode";

function Reto() {
  const { id } = useParams();
  const [{ description, title, language, dificultad }, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const URL = `http://localhost:3000/challenges/retos/${id}`;
    const data = await fetch(URL);
    const reto = await data.json();
    setData(reto);
  };

  return (
    <div>
      <h1>{title}</h1>
      <h1>{description}</h1>
      <h1>{language}</h1>
      <h1>{dificultad}</h1>
      <MirrorCode/>
    </div>
  );
}

export default Reto;
