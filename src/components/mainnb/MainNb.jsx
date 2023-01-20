import React from 'react'
import whatsapp from '../../assets/whatsapp.png'
import './MainNb.css'

function MainNb() {
  return (
    <div className='main-container-mainnb'>
      <div className='list-container'>
        <ul>
          <li>Inicio</li>
          <li>Lo nuevo</li>
          <li>Productos</li>
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