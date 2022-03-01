import React from "react";

// ESTILOS
import styles from "../styles/Certificado.module.css";

//Componentes de Bootstrap React

import { Card,Button } from "react-bootstrap";

function Certificado() {
  return (
   
    <div className={styles.container}>
     <div className={styles.carduno}>
     <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" width={150} src="https://technodyan.com/wp-content/uploads/2018/03/python.png" />
        <Card.Body>
          <Card.Title><h1>Python</h1></Card.Title>
          <Card.Text>
            Certificate en Python despues de adquirir tus primeros 10.000 puntos de EXP o tambien por medio de donaciones (free to play o pay to win 🤑 ).
          </Card.Text>
          <br/>
          <Button variant="primary">Dame ese carton</Button>
          
        </Card.Body>
      </Card>
     </div>
      <div className={styles.carddos}>
      <Card style={{ width: "30rem"  }} >
        <Card.Img variant="top" width={150} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" />
        <Card.Body>
          <Card.Title><h1>JavaScript</h1></Card.Title>
          <Card.Text>
          Certificate en JavaScript despues de adquirir tus primeros 10.000 puntos de EXP o tambien por medio de donaciones (free to play o pay to win 🤑 ).
          </Card.Text>
          <br/>
          <Button variant="primary">Dame ese carton</Button>
        </Card.Body>
      </Card>
      

      </div>
      <div className={styles.cardtres}>
      <Card style={{ width: "30rem"  }} >
        <Card.Img variant="top" width={150} src="https://images.emojiterra.com/google/android-10/512px/1f477.png" />
        <Card.Body>
          <Card.Title><h1>Trabajamos en mas</h1></Card.Title>
          <Card.Text>
          Estamos trabajando para traerte mas lenguajes 🕗.
          </Card.Text>
          <br/>
        
        </Card.Body>
      </Card>
      

      </div>
    </div>
      
    
  );
}

export default Certificado;
