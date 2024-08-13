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

import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context.jsx';
import ScrollToLink from '../ScrollToLink';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdLogout, MdEdit, MdHome } from 'react-icons/md';

const Navbar = () => {
  const { isLoggedIn, handleLogout, resetInputs, loggedInUserData } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  let lastScrollTop = 0;

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full py-4 px-6 bg-green-700/40 backdrop-blur-md flex justify-between items-center z-50 transition-transform duration-700 ease-in-out ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <Link to="/" onClick={closeMenu}>
        <img
          src='../src/assets/Logo.png'
          alt="MoodVentures Logo"
          className="w-20 h-20 transition-transform duration-300 hover:scale-110"
        />
      </Link>

      <div className="flex items-center space-x-4">
        <nav className={`hidden md:flex items-center space-x-6`}>
          <ScrollToLink to="our-mission" className="text-white text-lg font-medium py-2 px-4 hover:bg-yellowishGreenForTextandButtons rounded-full transition-colors duration-300 hover:text-darkGreenForText">Our Mission</ScrollToLink>
          <ScrollToLink to="how-it-works" className="text-white text-lg font-medium py-2 px-4 hover:bg-yellowishGreenForTextandButtons rounded-full transition-colors duration-300 hover:text-darkGreenForText">How it works</ScrollToLink>
          <Link to="/contact" className="text-white text-lg font-medium py-2 px-4 hover:bg-yellowishGreenForTextandButtons rounded-full transition-colors duration-300 hover:text-darkGreenForText">Contact</Link>
          {isLoggedIn && (
            <Link to="/mood-log" className="text-white text-lg font-medium py-2 px-4 hover:bg-yellowishGreenForTextandButtons rounded-full transition-colors duration-300 hover:text-darkGreenForText">Mood Log</Link>
          )}
        </nav>

        {isLoggedIn ? (
          <div className="relative">
            <button onClick={toggleUserMenu} className="flex items-center space-x-2">
              <img
                src={loggedInUserData.profileImage}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 bg-yellowishGreenForTextandButtons"
              />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-green-700/90 backdrop-blur-lg text-white rounded-lg shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out">
                <Link to="/user-profile" className="flex items-center px-4 py-2 hover:bg-green-600 rounded">
                  <MdEdit className="mr-2" />
                  Edit Profile
                </Link>
                <button onClick={handleLogout} className="flex items-center w-full px-4 py-2 hover:bg-green-600 rounded">
                  <MdLogout className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="bg-yellowishGreenForTextandButtons text-gray-800 py-2 px-4 text-lg rounded-full transition-all duration-300 hover:bg-yellowishGreenForTextandButtons">Login</Link>
        )}

        <button onClick={toggleMenu} className="md:hidden text-white text-3xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-green-700/90 backdrop-blur-md text-white flex flex-col items-center space-y-4 p-4 z-40 md:hidden transition-all duration-500 ease-in-out">
          <ScrollToLink to="our-mission" className="text-lg font-medium" onClick={closeMenu}>Our Mission</ScrollToLink>
          <ScrollToLink to="how-it-works" className="text-lg font-medium" onClick={closeMenu}>How it works</ScrollToLink>
          <Link to="/contact" className="text-lg font-medium" onClick={closeMenu}>Contact</Link>
          {isLoggedIn && (
            <Link to="/mood-log" className="text-lg font-medium" onClick={closeMenu}>Mood Log</Link>
          )}
        </nav>
      )}
    </div>
  );
};

export default Navbar;

