import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import RightSidebar from './RightSidebar'
import '../styles/layout.scss'

const MainLaout = () => {
  return (
    <>
    <Sidebar/>
    <div className='mainContent'>
        <Outlet/>
    </div>

    <RightSidebar/>
    </>
  )
}

export default MainLaout