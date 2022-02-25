import React from 'react'

import "../styles/Registro.css"

function Registro() {
  return (
    <body>

    <div className="container">
        <h4>Formulario de registro</h4>
        <input type="text" name="nombre" id="nombre" placeholder="nombre"/>
        <input type="text" name="apellido" id="apellido" placeholder="apellido"/>
        <input type="gmail" name="correo" id="correo" placeholder="correo"/> 
        <input type="password" name="contraseña" id="contraseña" placeholder="contraseña"/>
        <p>Estoy de acuerdo con <a href="#">Terminos y condiciones</a></p>
        <button className="learn-more">
            <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="button-text">REGISTRAR</span>
            </button>
        <p><a href="#">¿Ya tengo cuenta?</a></p>
    </div>
</body>
  )
}

export default Registro