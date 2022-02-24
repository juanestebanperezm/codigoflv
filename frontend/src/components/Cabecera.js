import React from 'react'
import "../styles/Cabecera.css"

function Cabecera() {
  return (
    <div>
      <div className='header'>
        <nav>
          <div className="container">
            <ul className='nav-links'>
              <li className="logo"><a>Logo</a></li>
              <li className='nav-link-item'><a href='#'>Preparate</a></li>
              <li className='nav-link-item'><a href='#'>Certificado</a></li>
              <li className='nav-link-item'><a href='#'>Compite</a></li>
            </ul>
            <div className="container">
              <ul className='nav-links'>
                <li className='nav-link-item'><a href='#'>Cuenta</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Cabecera