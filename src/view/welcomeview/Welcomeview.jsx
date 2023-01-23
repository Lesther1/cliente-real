import React from 'react'
import './Welcomeview.css'
import Carrusel from '../../components/carrusel/Carrusel'
import Card from '../../components/card/Card'


export const Welcomeview = () => {
  return (
    <div className='welcome-view-container'>
        <Carrusel/>
        <Card/>
    </div>
  )
}
export default Welcomeview
