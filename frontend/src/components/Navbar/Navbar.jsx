// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { Context } from '../../context/Context.jsx';
// import ScrollToLink from '../ScrollToLink';

// const Navbar = () => {
//   const { isLoggedIn, handleLogout, resetInputs, loggedInUserData } = useContext(Context);

//   return (
//     <div className="fixed top-0 left-0 w-full py-5 px-[10%] bg-green-600/40 flex justify-between items-center z-50">
//       <Link to="/" className="text-white text-4xl font-bold" onClick={resetInputs}>MoodVentures</Link>
//       <nav className="flex gap-4">
//         <ScrollToLink to="our-mission" className="text-white text-lg font-medium ml-10 cursor-pointer">Our Mission</ScrollToLink>
//         <ScrollToLink to="how-it-works" className="text-white text-lg font-medium ml-10 cursor-pointer">How it works</ScrollToLink>
//         <Link to="/contact" className="text-white text-lg font-medium ml-10">Contact</Link>
//         {isLoggedIn && <Link to="/mood-log" className="text-white text-lg font-medium ml-10">Mood Log</Link>}
//       </nav>
//       {isLoggedIn ? (
//         <div className="flex items-center gap-4">
//           <Link to="/user-profile" className="flex items-center gap-2 text-white no-underline" onClick={resetInputs}>
//             <img
//               src={loggedInUserData.profileImage}
//               alt="User Avatar"
//               className="w-10 h-10 rounded-full"
//             />
//             <span className="text-lg">{loggedInUserData.username}</span>
//           </Link>
//           <button className="bg-transparent border border-white text-white py-2 px-4 text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-black" onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div className="flex gap-4 text-white">
//           <Link to="/login" className="bg-transparent border border-white text-white py-2 px-4 text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-black">Login</Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

// * New responsive navbar:

import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context.jsx";
import ScrollToLink from "../ScrollToLink";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLogout, MdEdit } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const {
    isLoggedIn,
    handleLogout,
    loggedInUserData,
    handleLogin,
    username,
    setUsername,
    password,
    setPassword,
    error,
    success,
    closeModal,
  } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false); // Estado para el modal de bienvenida

  const menuRef = useRef(null);
  const userMenuRef = useRef(null);
  const loginDropdownRef = useRef(null);

  // Toggle functions for the menus
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsUserMenuOpen(false);
    setIsLoginDropdownOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsMenuOpen(false);
    setIsLoginDropdownOpen(false);
  };

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
    setIsLoginDropdownOpen(false);
  };

  let lastScrollTop = 0;

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setIsVisible(scrollTop < lastScrollTop);
    closeAllMenus();
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }; // avoid negative values

  console.log(isLoginDropdownOpen)
  console.log(isMenuOpen)

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside of any of the dropdowns or menus
      if (
        (menuRef.current && !menuRef.current.contains(event.target)) &&
        (userMenuRef.current && !userMenuRef.current.contains(event.target)) &&
        (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target))
      ) {
        closeAllMenus();
      } 
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
        setIsLoginDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }

      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      
    };
      window.addEventListener('scroll', handleScroll); // Close menus on scroll
      document.addEventListener('mousedown', handleClickOutside); // Close menus on click outside
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Detect successful login and show the modal
  useEffect(() => {
    if (success.show) {
      setShowWelcomeModal(true);
    }
  }, [success]);

  return (
    <div
      className={`fixed top-0 left-0 w-full py-4 px-6 bg-green-700/40 backdrop-blur-md flex justify-between items-center z-50 transition-transform duration-700 ease-in-out ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <Link to="/" onClick={closeAllMenus}>
        <img
          src="/images/logo.png"
          alt="MoodVentures Logo"
          className="w-20 h-20 transition-transform duration-300 hover:scale-110"
        />
      </Link>

      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex items-center space-x-6" ref={menuRef}>
          <ScrollToLink
            to="our-mission"
            className="text-white text-lg font-medium py-2 px-4 hover:bg-yellowishGreenForTextandButtons rounded-full transition-colors duration-300 hover:text-darkGreenForText"
            onClick={closeAllMenus}
          >
            Our Mission
          </ScrollToLink>
          <ScrollToLink
            to="how-it-works"
            className="text-white text-lg font-medium py-2 px-4 hover:bg-yellowishGreenForTextandButtons rounded-full transition-colors duration-300 hover:text-darkGreenForText"
            onClick={closeAllMenus}
          >
            How it works
          </ScrollToLink>
          <Link
            to="/contact"
            className="text-white text-lg font-medium py-2 px-4 hover:bg-yellowishGreenForTextandButtons rounded-full transition-colors duration-300 hover:text-darkGreenForText"
            onClick={closeAllMenus}
          >
            Contact
          </Link>
          {isLoggedIn && (
            <Link
              to="/mood-log"
              className="text-white text-lg font-medium py-2 px-4 hover:bg-yellowishGreenForTextandButtons rounded-full transition-colors duration-300 hover:text-darkGreenForText"
              onClick={closeAllMenus}
            >
              Mood Log
            </Link>
          )}
        </nav>

        {isLoggedIn ? (
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={toggleUserMenu}
              className="flex items-center space-x-2"
            >
              <img
                src={loggedInUserData.profileImage}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 bg-yellowishGreenForTextandButtons"
              />
            </button>
            {isUserMenuOpen && (
              <div className="menu-animate absolute right-0 mt-2 w-48 bg-green-700/90 backdrop-blur-lg text-white rounded-lg shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out">
                <Link
                  to="/user-profile"
                  className="flex items-center px-4 py-2 hover:bg-green-600 rounded"
                  onClick={closeAllMenus}
                >
                  <MdEdit className="mr-2" />
                  Edit Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 hover:bg-green-600 rounded"
                >
                  <MdLogout className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="relative" ref={loginDropdownRef}>
            <button
              onClick={toggleLoginDropdown}
              className="bg-yellowishGreenForTextandButtons text-darkGreenForText py-2 px-4 text-lg font-semibold rounded-full transition-all duration-300 hover:bg-white"
            >
              Login
            </button>
            {isLoginDropdownOpen && (
              <div className="menu-animate absolute right-0 mt-2 w-64 bg-green-700/90 backdrop-blur-lg text-white rounded-lg shadow-lg z-50 p-4 transition-all duration-300 ease-in-out">
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border-none rounded-lg bg-white/30 text-white placeholder-white/50"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-2 border-none rounded-lg bg-white/30 text-white placeholder-white/50"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm mb-2">{error}</p>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-yellowishGreenForTextandButtons text-darkGreenForText py-2 px-4 text-lg font-semibold rounded-full transition-all duration-300 hover:bg-white"
                  >
                    Login
                  </button>
                </form>
                <div className="mt-4 text-center">
                  <span className="text-white text-sm">
                    Don't have an account?
                  </span>
                  <Link
                    to="/register"
                    className="text-yellowishGreenForTextandButtons font-semibold ml-2"
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        <button onClick={toggleMenu} className="md:hidden text-white text-3xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          className="menu-animate absolute top-full left-0 w-full bg-green-700/90 backdrop-blur-md text-white flex flex-col items-center space-y-4 p-4 z-40 md:hidden transition-all duration-500 ease-in-out"
          ref={menuRef}
        >
          <ScrollToLink
            to="our-mission"
            className="text-lg font-medium"
            onClick={closeAllMenus}
          >
            Our Mission
          </ScrollToLink>
          <ScrollToLink
            to="how-it-works"
            className="text-lg font-medium"
            onClick={closeAllMenus}
          >
            How it works
          </ScrollToLink>
          <Link
            to="/contact"
            className="text-lg font-medium"
            onClick={closeAllMenus}
          >
            Contact
          </Link>
          {isLoggedIn && (
            <Link
              to="/mood-log"
              className="text-lg font-medium"
              onClick={closeAllMenus}
            >
              Mood Log
            </Link>
          )}
        </nav>
      )}

      {/* Modal de Bienvenida */}
      {success.show && (
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md">
       <div className="absolute top-80 left-50 backdrop-blur-md  bg-white shadow-lg rounded-lg p-6 max-w-sm w-full text-center animate-fade-in">
         <h2 className="text-2xl font-bold text-green-700 mb-4">Welcome, {success.message}</h2>
         <p className="text-gray-700">We’re glad to have you back!</p>
         <button
              onClick={() => {
                setShowWelcomeModal(false); 
                closeModal(); // call the closeModal function from the context
              }}
              className="bg-yellowishGreenForTextandButtons text-darkGreenForText py-2 px-4 rounded-full font-semibold transition-all duration-300 hover:bg-darkGreenForText hover:text-white"
             
            >
              Close
            </button>
       </div>
     </div>
      )}
    </div>
  );
};

export default Navbar;
