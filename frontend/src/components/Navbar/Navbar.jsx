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

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context.jsx';
import ScrollToLink from '../ScrollToLink';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { isLoggedIn, handleLogout, resetInputs, loggedInUserData } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full py-5 px-[10%] bg-green-600/40 flex justify-evenly items-center z-50">
      <Link to="/" className="text-white text-4xl font-bold" onClick={() => { resetInputs(); closeMenu(); }}>MoodVentures</Link>
      <div className="custom:hidden">
        <button onClick={toggleMenu} className="text-white text-3xl">
          <FaBars />
        </button>
      </div>
      <nav className={`custom:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col custom:flex-row absolute custom:relative top-full left-0 w-full custom:w-auto bg-darkGreenForBG custom:bg-transparent z-40`}>
        <ScrollToLink to="our-mission" className="text-white text-lg font-medium py-2 px-4 cursor-pointer hover:bg-yellowishGreenForTextandButtons rounded-full" onClick={closeMenu}>Our Mission</ScrollToLink>
        <ScrollToLink to="how-it-works" className="text-white text-lg font-medium py-2 px-4 cursor-pointer hover:bg-yellowishGreenForTextandButtons rounded-full" onClick={closeMenu}>How it works</ScrollToLink>
        <Link to="/contact" className="text-white text-lg font-medium py-2 px-4 hover:bg-yellowishGreenForTextandButtons rounded-full" onClick={closeMenu}>Contact</Link>
        {isLoggedIn && <Link to="/mood-log" className="text-white text-lg font-medium py-2 px-4 hover:bg-yellowishGreenForTextandButtons rounded-full" onClick={closeMenu}>Mood Log</Link>}
        {isLoggedIn ? (
          <>
            <Link to="/user-profile" className="flex items-center gap-2 text-white no-underline py-2 px-4 hover:bg-yellowishGreenForTextandButtons rounded-full" onClick={() => { resetInputs(); closeMenu(); }}>
              <img
                src={loggedInUserData.profileImage}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-lg">{loggedInUserData.username}</span>
            </Link>
            <button className="mt-2 bg-yellowishGreenForTextandButtons text-darkGreenForBG py-2 px-4 text-lg cursor-pointer transition-all duration-300 hover:bg-white rounded-full" onClick={() => { handleLogout(); closeMenu(); }}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="mt-2 bg-yellowishGreenForTextandButtons text-darkGreenForBG py-2 px-4 text-lg cursor-pointer transition-all duration-300 hover:bg-white rounded-full text-center" onClick={closeMenu}>Login</Link>
        )}
        {isMenuOpen && (
          <button onClick={closeMenu} className="text-white text-lg py-2 px-4 flex items-center justify-center hover:bg-red-500">
            <FaTimes />
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;