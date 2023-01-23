import React from 'react'
import { NavLink } from "react-router-dom";
import './Footer.css'

function Footer() {
  return (
    <div className='container-footer'>
        <div className='container-first-section'>
            <h2>Marco Soluciones</h2>
            <NavLink to="/condicionview">
              Equipo
            </NavLink>
            <NavLink to="/condicionview">
              Nosotros
            </NavLink>
        </div>
        <div className='container-second-section'>
            <h2>Terminos y condiciones</h2>
            <NavLink to="">
              Terminos de instalacion
            </NavLink>
            <NavLink to="">
              Precio
            </NavLink>
            <NavLink to="">
              Garantia
            </NavLink>
        </div>
        <div className='container-third-section'>
            <h2>Contacto</h2>
            <NavLink to="">
              Telefono
            </NavLink>
            <NavLink to="">
              Whatsapp
            </NavLink>
            <NavLink to="">
              Horarios de atencion
            </NavLink>
            <NavLink to="">
              Direccion
            </NavLink>
        </div>
        <div className='container-fourth-section'>
            <h2>Suscribete</h2>
            <p>Recibe informacion de nuestros productos</p>
            <input type="text" placeholder='Email@example.com' />
            <button>Suscribirse</button>
        </div>
    </div>
  )
}

export default Footer