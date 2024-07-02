import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
        <a href="/" className="logo">Logo</a>

        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/">Our Mission</a>
            <a href="/">How it works</a>
            <a href="/">Contact</a>
            <a href="/">Login</a>
        </nav>
    </header>
  )
}

export default Navbar