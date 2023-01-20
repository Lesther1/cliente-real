import React from 'react'
import Header from '../../components/header/Header'
import MainNb from '../../components/mainnb/MainNb'
import Nbenterprise from '../../components/nbenterprise/Nbenterprise'
import Data from "../../../Data.js"
import './Welcomeview.css'


export const Welcomeview = () => {
  return (
    <div className='welcome-view-container'>
        <Nbenterprise/>
        <Header/>
        <MainNb/>
    </div>
  )
}
