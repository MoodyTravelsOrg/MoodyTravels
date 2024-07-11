import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function Layout({ isAuthenticated, userImage, username, onLogout }) {
  return (
    <>
    <header>
        <Navbar 
            isAuthenticated={isAuthenticated}
            userImage={userImage}
            defaultProfileImage={null} // Add the default profile image here
            username={username}
            onLogout={onLogout}
        />
    </header>
    <main>
        <Outlet />
    </main>
    </>
  )
}

export default Layout