// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import { Context } from '../../context/Context.jsx';
// const Navbar = () => {

//   const { isLoggedIn, handleLogout, resetInputs, loggedInUserData } = useContext(Context)

//   return (
//     <div className="header">
//       <Link to="/" className="logo" onClick={resetInputs}>MoodyTravels</Link>
//       <nav className="navbar">
//         <Link to="/mission" onClick={resetInputs}>Our Mission</Link>
//         <Link to="/how-it-works" onClick={resetInputs}>How it works</Link>
//         <Link to="/contact" onClick={resetInputs}>Contact</Link>
//         {isLoggedIn && <Link to="/mood-tracker" onClick={resetInputs}>MoodTracker</Link>}
//       </nav>
//       {isLoggedIn ? (
//         <div className="navbar-right">
//           <Link to="/user-profile" className="navbar-profile-link" onClick={resetInputs}>
//             <img
//               src={loggedInUserData.profileImage}
//               alt="User Avatar"
//               className="navbar-profile-image"
//             />
//             <span className="welcome-msg">Welcome {loggedInUserData.username}</span>
//           </Link>
//           <button className="navbar-button-logout" onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div className="auth-links">
//           <Link to="/login" className="navbar-button" onClick={resetInputs}>Login</Link>
         
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

// ! Now with Tailwind CSS:

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context.jsx';

import { Link as ScrollLink } from 'react-scroll';

// const Navbar = () => {
//   const { isLoggedIn, handleLogout, resetInputs, loggedInUserData } = useContext(Context);

//   return (
//     <div className="fixed top-0 left-0 w-full py-5 px-[10%] bg-transparent flex justify-between items-center z-100">
//       <Link to="/" className="text-white text-4xl font-bold" onClick={resetInputs}>MoodyTravels</Link>
//       <nav className="flex gap-4">
//         <Link to="/mission" className="text-white text-lg font-medium ml-10 relative before:absolute before:top-full before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full" onClick={resetInputs}>Our Mission</Link>
//         <Link to="/how-it-works" className="text-white text-lg font-medium ml-10 relative before:absolute before:top-full before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full" onClick={resetInputs}>How it works</Link>
//         <Link to="/contact" className="text-white text-lg font-medium ml-10 relative before:absolute before:top-full before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full" onClick={resetInputs}>Contact</Link>
//         {isLoggedIn && <Link to="/mood-tracker" className="text-white text-lg font-medium ml-10 relative before:absolute before:top-full before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full" onClick={resetInputs}>MoodTracker</Link>}
//       </nav>
//       {isLoggedIn ? (
//         <div className="flex items-center gap-4">
//           <Link to="/user-profile" className="flex items-center gap-2 text-white no-underline" onClick={resetInputs}>
//             <img
//               src={loggedInUserData.profileImage}
//               alt="User Avatar"
//               className="w-10 h-10 rounded-full"
//             />
//             <span className="text-lg">Welcome {loggedInUserData.username}</span>
//           </Link>
//           <button className="bg-transparent border border-white text-white py-2 px-4 text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-black" onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div className="flex gap-4 text-white">
//           <Link to="/login" className="bg-transparent border border-white text-white py-2 px-4 text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-black" onClick={resetInputs}>Login</Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

// ! The NEW Styling:

const Navbar = () => {
  const { isLoggedIn, handleLogout, resetInputs, loggedInUserData } = useContext(Context);

  return (
    <div className="fixed top-0 left-0 w-full py-5 px-[10%] bg-green-600/40 flex justify-between items-center z-50">
      {/* Since we have a fixed Navbar "bg-transparent" was a bit problematic, so I decided to switch to "bg-green-600/30", matching the "close to nature" vibe whilst still being transparent. */}
      <Link to="/" className="text-white text-4xl font-bold" onClick={resetInputs}>MoodyTravels</Link>
      <nav className="flex gap-4">
        <ScrollLink to="our-mission" smooth={true} offset={-64} className="text-white text-lg font-medium ml-10 cursor-pointer">Our Mission</ScrollLink>
        <ScrollLink to="how-it-works" smooth={true} offset={-64} className="text-white text-lg font-medium ml-10 cursor-pointer">How it works</ScrollLink>
        <Link to="/contact" className="text-white text-lg font-medium ml-10">Contact</Link>
        {isLoggedIn && <Link to="/mood-tracker" className="text-white text-lg font-medium ml-10">MoodTracker</Link>}
      </nav>
      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <Link to="/user-profile" className="flex items-center gap-2 text-white no-underline" onClick={resetInputs}>
            <img
              src={loggedInUserData.profileImage}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-lg">Welcome {loggedInUserData.username}</span>
          </Link>
          <button className="bg-transparent border border-white text-white py-2 px-4 text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-black" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="flex gap-4 text-white">
          <Link to="/login" className="bg-transparent border border-white text-white py-2 px-4 text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-black">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;