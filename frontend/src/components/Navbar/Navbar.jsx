import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

const Navbar = ({ isAuthenticated, userImage, defaultProfileImage, username, onLogout }) => {


  return (
    <div className="header">
      <Link to="/" className="logo">MoodyTravels</Link>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/mission">Our Mission</Link>
        <Link to="/how-it-works">How it works</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {isAuthenticated ? (
        <div className="navbar-right">
          <Link to="/user-profile" className="navbar-profile-link">
            <img
              src={userImage || defaultProfileImage}
              alt="User"
              className="navbar-profile-image"
            />
            <span className="welcome-msg">Welcome {username}</span>
          </Link>
          <button className="navbar-button" onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <div className="auth-links">
          <Link to="/login" className="navbar-button">Login</Link>
          <Link to="/register" className="navbar-button">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
