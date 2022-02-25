
import React, { useEffect, useState } from 'react'

import "../styles/Preparate.css"

function Preparate() {

  const [reto,setReto]=useState([]);

  useEffect(()=>{
    getData()
  },[])

  const getData=async ()=>{
    const URL="http://localhost:3000/challenges/retos"
    const data=await fetch(URL)
    const challenge=await data.json()

    setReto(challenge)
  }


  return (
    <div>
       {!reto?"Cargando datos, ve tomandote una cerveza":reto.map( (challenge,index)=>{
         return <div>

           <h1>{challenge.title}</h1>

           <p>{challenge.description}</p>

           <p>{challenge.language}</p>

           <span>{challenge.dificultad}</span>

         </div>
       } )}
      </div>)
      
}


export default Preparate


      