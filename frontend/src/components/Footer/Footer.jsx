// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="w-full bottom-0 px-4 py-8">
//       <div
//         // className="max-w-screen-xl mx-auto bg-cover bg-center rounded-3xl shadow-lg overflow-hidden"
//         className="max-w-[80%] mx-auto bg-cover bg-center rounded-3xl shadow-lg overflow-hidden"
//         style={{ backgroundImage: "url('/images/Palmtree-sunset-footer-banner.jpeg')" }}
//       >
//         <div className="bg-black bg-opacity-50 backdrop-blur-md px-6 py-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
//             <div className="w-full md:w-1/4 text-center md:text-left text-white">
//               <h2 className="mb-4 text-2xl font-bold">MoodVentures</h2>
//               <p className="text-sm">Explore the world based on your mood. Discover the best destinations that suit your current feelings and emotions.</p>
//             </div>
//             <div className="w-full md:w-1/4 text-center text-white">
//               <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
//               <ul className="list-none p-0">
//                 <li className="mb-2"><a href="/" className="text-white no-underline hover:underline">Home</a></li>
//                 <li className="mb-2"><a href="/how-it-works" className="text-white no-underline hover:underline">How it works</a></li>
//                 <li className="mb-2"><a href="/mission" className="text-white no-underline hover:underline">Our Mission</a></li>
//                 <li className="mb-2"><a href="/contact" className="text-white no-underline hover:underline">Contact</a></li>
//               </ul>
//             </div>
//             <div className="w-full md:w-1/4 text-center md:text-right text-white">
//               <h3 className="mb-4 text-xl font-semibold">Contact Info</h3>
//               <p className="text-sm mb-2">Email: support@moodventures.com</p>
//               <p className="text-sm">Phone: +49 00000000000</p>
//             </div>
//           </div>
//           <div className="mt-8 text-center text-white">
//             <p className="text-sm">&copy; 2024 MoodVentures. All Rights Reserved.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// ! Here's the new footer according to the design I talked about with Alexis. The old code is commented out above in case I need some of that later on.

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bottom-0 bg-darkGreenForBG">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          <div className="w-full md:w-1/3 text-white md:text-left">
            <h2 className="mb-4 text-2xl font-bold">MoodVentures</h2>
            <p className="text-sm">
              Explore the world based on your mood. Discover the best
              destinations that suit your current feelings and emotions.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-white ml-80 md:text-center">
            <h3 className="mb-4 text-2xl font-bold">Quick Links</h3>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a href="/" className="text-white no-underline hover:underline">
                  Home
                </a>
              </li>

              {/* <li className="mb-2"><a href="/how-it-works" className="text-white no-underline hover:underline">How it works</a></li>
              <li className="mb-2"><a href="/our-mission" className="text-white no-underline hover:underline">Our Mission</a></li> */}
              <li className="mb-2">
                <Link
                  to="/"
                  state={{ scrollTo: "how-it-works" }}
                  className="text-white no-underline hover:underline"
                >
                  How it works
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  state={{ scrollTo: "our-mission" }}
                  className="text-white no-underline hover:underline"
                >
                  Our Mission
                </Link>
              </li>

              <li className="mb-2">
                <a
                  href="/contact"
                  className="text-white no-underline hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-white ml-64 md:text-right">
            <h3 className="mb-4 text-2xl font-bold">Contact Info</h3>
            <p className="text-sm mb-2">
              Email: <br />
              support@moodventures.com
            </p>
            <p className="text-sm">
              Phone: <br /> +49 00000000000
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-white ml-16">
          <p className="text-sm">
            &copy; 2024 MoodVentures. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
