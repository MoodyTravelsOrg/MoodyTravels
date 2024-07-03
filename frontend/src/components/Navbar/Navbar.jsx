import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">MoodyTravels</a>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/mission">Our Mission</a>
        <a href="/how-it-works">How it works</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="auth-links">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </header>
  );
};

export default Navbar;
