import React from "react";
import './Condicionview.css'

function Condicionview() {
  return (
    <div className="acordeon-container">
      <div className="acordeon-enterprise">
        <details>
          <summary>Equipo</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, ullam.
          </p>
        </details>
        <details>
          <summary>Nosotros</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, ullam.
          </p>
        </details>
      </div>
      <div className="acordeon-terminos">
        <details>
          <summary>Terminos de intalacion</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, ullam.
          </p>
        </details>
        <details>
          <summary>Precio</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, ullam.
          </p>
        </details>
        <details>
          <summary>Garantia</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, ullam.
          </p>
        </details>
      </div>
    </div>
  );
}

export default Condicionview;
