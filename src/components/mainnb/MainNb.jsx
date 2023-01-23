import React from 'react'
import { NavLink } from "react-router-dom";
import whatsapp from '../../assets/whatsapp.png';
import './MainNb.css'

function MainNb() {
  return (
    <div className='main-container-mainnb'>
      <div className='list-container'>
        <ul>
          <li>
          <NavLink to="/welcomeview">
              Inicio
            </NavLink>
          </li>
          <li>Lo nuevo</li>
          <li>
            <NavLink to="/productview">
              Productos
            </NavLink>
            </li>
          <li>Conctacto</li>
        </ul>
      </div>
      <div className='time-container'>
        <img src={whatsapp} alt="" />
        <h5>Lun-Sab 8:00 am a 7:00pm</h5>
      </div>
    </div>
  )
}

export default MainNb