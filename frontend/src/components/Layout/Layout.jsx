import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function Layout() {
  return (
    <>
      <header>
        <Navbar 
        />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout;
