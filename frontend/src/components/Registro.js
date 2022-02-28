import React, {  useState } from "react";
import styles from "../styles/Registro.module.css";

function Registro() {
  const [first, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeatPassword] = useState("");


  const URL = "http://localhost:3000/usuarios";

  const username = { name:{first,last}, email, password,repeat_password };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(username),
    }).then(() => {
      console.log(":)");
    });
  };

  return (
    <div className={styles["fondo"]}>
      <form onSubmit={handleSubmit}>
        <div className={styles["input-fields"]}>
          <label className={styles["chapa"]}>Primer nombre</label>
          <input
            type="text"
            placeholder="Nombre de usuario"
            className={styles["inlinein"]}
            name="first"
            onChange={(e) => setName(e.target.value)}
            value={username.name.first}
          ></input>
          <label className={styles["chapa"]}>Segundo nombre</label>
          <input
            type="text"
            placeholder="Nombre de usuario"
            className={styles["inlinein"]}
            name="last"
            onChange={(e) => setLast(e.target.value)}
            value={username.name.last}
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
          <label className={styles["chapa"]}>
            Repite la contraseña
          </label>
          <input
            type="password"
            placeholder="Contraseña"
            className={styles["inlinein"]}
            name="password"
            onChange={(e) => setRepeatPassword(e.target.value)}
            value={repeat_password}
          ></input>

          <button className={styles["name noselect"]}>Registrate</button>
        </div>
      </form>
    </div>
  );
}

export default Registro;
