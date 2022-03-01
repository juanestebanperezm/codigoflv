import React from 'react'

import monaChina from '../../styles/assets/temporalAdvertisement2.jpg'
import '../../styles/Advertesiment.css'

function AdvertesimentLeft() {
  return (
    <div class="addLeft">
      <img src={ monaChina } alt="Anuncio pa' comer" />
      <a>Si ves esto es porque hay poco contenido arriba</a>
    </div>
  )
}

export default AdvertesimentLeft;
