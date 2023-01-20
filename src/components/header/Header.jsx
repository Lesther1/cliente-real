import React from 'react'
import logo from '../../assets/logo.png'
import Shopcart from '../../assets/shopcart.png'
import './Header.css'

function Header() {
  return (
    <div className='main-container-header'>
        <img src={logo} alt="" className='logo' />
        <img src={Shopcart} alt="" className='shopcart'/>
    </div>
  )
}

export default Header