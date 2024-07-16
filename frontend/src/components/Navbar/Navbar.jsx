import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import defaultProfileImage from '../../assets/default-profile.png';
import { Context } from '../../context/Context.jsx';
const Navbar = () => {

  const { isLoggedIn, userImage, handleLogout, resetInputs, loggedInUserData } = useContext(Context)

  return (
    <div className="header">
      <Link to="/" className="logo" onClick={resetInputs}>MoodyTravels</Link>
      <nav className="navbar">
        <Link to="/mission" onClick={resetInputs}>Our Mission</Link>
        <Link to="/how-it-works" onClick={resetInputs}>How it works</Link>
        <Link to="/contact" onClick={resetInputs}>Contact</Link>
        {isLoggedIn && <Link to="/mood-tracker" onClick={resetInputs}>MoodTracker</Link>}
      </nav>
      {isLoggedIn ? (
        <div className="navbar-right">
          <Link to="/user-profile" className="navbar-profile-link" onClick={resetInputs}>
            <img
              src={userImage || defaultProfileImage}
              alt="User Avatar"
              className="navbar-profile-image"
            />
            <span className="welcome-msg">Welcome {loggedInUserData.username}</span>
          </Link>
          <button className="navbar-button-logout" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="auth-links">
          <Link to="/login" className="navbar-button" onClick={resetInputs}>Login</Link>
          <Link to="/register" className="navbar-button" onClick={resetInputs}>Register</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;





