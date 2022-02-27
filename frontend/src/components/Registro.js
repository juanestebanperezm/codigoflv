import React, { useState } from "react";
/* import axios, { AxiosResponse, AxiosInstance } from 'axios'; */
import styles from "../styles/Registro.module.css";

function Registro() {

  const URL="http://localhost:3000/usuarios"

  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  });

  function submit(e){
    e.preventDefault();
    /* axios.post(URL,{
      name:data.name,
      email:data.email,
      password:data.password
    })
    .then(res=>{
      console.log(res.data)
    }) */
  }

  function handle(e){
    const newData={...data}
    newData[e.target.id]=e.target.value
    setData(newData)
    console.log(newData)
  }

  return (
    
     <div className={styles["fondo"]}>
       <form onSubmit={(e)=>submit(e)}>
       <div className={styles["input-fields"]}>
        <label className={styles["chapa"]}>Nickname, apodo, chapa o como queras llamarte</label>
        <input
          type="text"
          placeholder="Nombre de usuario"
          className={styles["inlinein"]}
          name="name"
        ></input>
        <label className={styles["chapa"]}>Correo</label>
        <input
          type="email"
          placeholder="Email"
          className={styles["inlinein"]}
          name="email"
        ></input>
        <label className={styles["chapa"]}>La clave y ojo pone algo bien facil</label>
        <input
          type="password"
          placeholder="Contraseña"
          className={styles["inlinein"]}
          name="password"
        ></input>
      {/*   <label className={styles["chapa"]}>Repita la clave</label>
        <input
          type="password"
          placeholder="Confirma tu contraseña"
          className={styles["inlinein"]}
        ></input> */}
        
        <button className={styles["name noselect"]}>Registrate</button>
      </div>
       </form>
     </div>
     
    
  );
}

export default Registro;
