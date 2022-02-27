import React, { useEffect, useState } from "react";
import styles from "../styles/Registro.module.css";

function Registro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const URL = "http://localhost:3000/usuarios";

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };

    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log(":)");
    });
  };

  return (
    <div className={styles["fondo"]}>
      <form onSubmit={handleSubmit}>
        <div className={styles["input-fields"]}>
          <label className={styles["chapa"]}>
            Nickname, apodo, chapa o como queras llamarte
          </label>
          <input
            type="text"
            placeholder="Nombre de usuario"
            className={styles["inlinein"]}
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <label className={styles["chapa"]}>Correo</label>
          <input
            type="email"
            placeholder="Email"
            className={styles["inlinein"]}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <label className={styles["chapa"]}>
            La clave y ojo pone algo bien facil
          </label>
          <input
            type="password"
            placeholder="Contraseña"
            className={styles["inlinein"]}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
