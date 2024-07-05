import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import defaultProfileImage from "../../assets/default-profile.png"; // Import the default profile image

const Navbar = ({ isAuthenticated, userAvatar, username, onLogout }) => {
  return (
    <div className="header">
      <div className="navbar-content">
        <Link to="/" className="logo">
          MoodyTravels
        </Link>
        <div className="navbar-center-content">
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/mission">Our Mission</Link>
            <Link to="/how-it-works">How it works</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        {isAuthenticated ? (
          <div className="navbar-right">
            <Link to="/user-profile" className="navbar-profile-link">
              <img
                src={userAvatar ? userAvatar : defaultProfileImage}
                alt={`${username}'s avatar`}
                className="navbar-profile-image"
              />
              <span className="welcome-msg">Welcome{username}</span>
            </Link>
            <button className="navbar-button" onClick={onLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-right">
            <Link to="/login" className="navbar-button">
              Login
            </Link>
            <Link to="/register" className="navbar-button">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
