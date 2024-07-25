import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context.jsx';

// import { Link as ScrollLink } from 'react-scroll'; // * I removed this import as it is no longer needed --> check the ScrollToLink component...
import ScrollToLink from '../ScrollToLink';

// ! By the way: I now got rid of all the commented out code snippets, as they are no longer needed. Right? The one below is the last iteration with the "buggy" ScrollLink feature.

// const Navbar = () => {
//   const { isLoggedIn, handleLogout, resetInputs, loggedInUserData } = useContext(Context);

//   return (
//     <div className="fixed top-0 left-0 w-full py-5 px-[10%] bg-green-600/40 flex justify-between items-center z-50">
//       {/* Since we have a fixed Navbar "bg-transparent" was a bit problematic, so I decided to switch to "bg-green-600/30", matching the "close to nature" vibe whilst still being transparent. */}
//       <Link to="/" className="text-white text-4xl font-bold" onClick={resetInputs}>MoodyTravels</Link>
//       <nav className="flex gap-4">
//         <ScrollLink to="our-mission" smooth={true} offset={-64} className="text-white text-lg font-medium ml-10 cursor-pointer">Our Mission</ScrollLink>
//         <ScrollLink to="how-it-works" smooth={true} offset={-64} className="text-white text-lg font-medium ml-10 cursor-pointer">How it works</ScrollLink>
//         <Link to="/contact" className="text-white text-lg font-medium ml-10">Contact</Link>
//         {isLoggedIn && <Link to="/mood-tracker" className="text-white text-lg font-medium ml-10">MoodTracker</Link>}
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
//           <Link to="/login" className="bg-transparent border border-white text-white py-2 px-4 text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-black">Login</Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

// * Here's the solution:

const Navbar = () => {
  const { isLoggedIn, handleLogout, resetInputs, loggedInUserData } = useContext(Context);

  return (
    <div className="fixed top-0 left-0 w-full py-5 px-[10%] bg-green-600/40 flex justify-between items-center z-50">
      <Link to="/" className="text-white text-4xl font-bold" onClick={resetInputs}>MoodVentures</Link>
      <nav className="flex gap-4">
        <ScrollToLink to="our-mission" className="text-white text-lg font-medium ml-10 cursor-pointer">Our Mission</ScrollToLink>
        <ScrollToLink to="how-it-works" className="text-white text-lg font-medium ml-10 cursor-pointer">How it works</ScrollToLink>
        <Link to="/contact" className="text-white text-lg font-medium ml-10">Contact</Link>
        {isLoggedIn && <Link to="/mood-log" className="text-white text-lg font-medium ml-10">Mood Log</Link>}
      </nav>
      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <Link to="/user-profile" className="flex items-center gap-2 text-white no-underline" onClick={resetInputs}>
            <img
              src={loggedInUserData.profileImage}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-lg">{loggedInUserData.username}</span>
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