import React from 'react'
import MyNavbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Home from './Home'
function Mainlayout() {
  return (
    <>
    <MyNavbar/>
    <Home/>
    
    <Outlet />
    </>
  )
}

export default Mainlayout