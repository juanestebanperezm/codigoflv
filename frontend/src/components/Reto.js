//Modulos
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Componente externo

import MirrorCode from './MirrorCode';

function Reto() {
  const { id } = useParams();
  const [{ description, title, language, dificultad }, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const URL = `http://localhost:3000/retos/${id}`;
    const data = await fetch(URL);
    const reto = await data.json();
    console.log('El reto pues: ', reto);
    setData(reto.challenge);
  };

  return (
    <div style={{ height: '250px' }}>
      <h4>{title}</h4>
      <h4>{description}</h4>
      <h4>{language}</h4>
      <h4>{dificultad}</h4>
      <MirrorCode />
    </div>
  );
}

export default Reto;
