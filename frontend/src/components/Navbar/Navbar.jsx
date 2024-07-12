import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import defaultProfileImage from '../../assets/default-profile.png';

const Navbar = ({ isAuthenticated, userImage, username, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Ejecuta la función de logout pasada desde props
    navigate('/'); // Redirige al usuario a la página de inicio
  };

  return (
    <div className="header">
      <Link to="/" className="logo">MoodyTravels</Link>
      <nav className="navbar">
        <Link to="/mission">Our Mission</Link>
        <Link to="/how-it-works">How it works</Link>
        <Link to="/contact">Contact</Link>
        {isAuthenticated && <Link to="/mood-tracker">MoodTracker</Link>}
      </nav>
      {isAuthenticated ? (
        <div className="navbar-right">
          <Link to="/user-profile" className="navbar-profile-link">
            <img
              src={userImage || defaultProfileImage}
              alt="User Avatar"
              className="navbar-profile-image"
            />
            <span className="welcome-msg">Welcome {username}</span>
          </Link>
          <button className="navbar-button-logout" onClick={handleLogout}>Logout</button>
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





