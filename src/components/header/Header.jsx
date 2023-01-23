import React from 'react'
import logo from '../../assets/logo.png'
import Shopcart from '../../assets/shopcart.png'
import { NavLink } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <div className='main-container-header'>
        <img src={logo} alt="" className='logo' />
        <NavLink to="/shopcart">
          <img src={Shopcart} alt="" className='shopcart'/>
        </NavLink>
    </div>
  )
}

export default Header