import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

import '../styles/layout.scss'

const MainLaout = () => {
  return (
    <>
    <Sidebar/>
    <div className='mainContent'>
        <Outlet/>
    </div>

   
    </>
  )
}

export default MainLaout