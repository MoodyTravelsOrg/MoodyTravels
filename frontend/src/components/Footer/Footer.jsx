// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section about">
//           <h2>MoodyTravels</h2>
//           <p>Explore the world based on your mood. Discover the best destinations that suit your current feelings and emotions.</p>
//         </div>
//         <div className="footer-section links">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/how-it-works">How it works</a></li>
//             <li><a href="/mission">Our Mission</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>
//         <div className="footer-section contact-info">
//           <h3>Contact Info</h3>
//           <p>Email: support@moodytravels.com</p>
//           <p>Phone: +49 00000000000</p>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; 2024 MoodyTravels. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// ! Tailwind CSS:

import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full sticky bottom-0 bg-white/10 backdrop-blur-md text-white py-5 mx-auto text-center shadow-[0_-2px_10px_rgba(0,0,0,0.2)]">
      <div className="flex flex-wrap justify-around items-start">
        <div className="flex-1 m-2.5">
          <h2 className="mb-2.5 text-xl font-bold">MoodyTravels</h2>
          <p className="text-sm">Explore the world based on your mood. Discover the best destinations that suit your current feelings and emotions.</p>
        </div>
        <div className="flex-1 m-2.5">
          <h3 className="mb-2.5 text-lg font-semibold">Quick Links</h3>
          <ul className="list-none p-0">
            <li className="mb-2.5"><a href="/" className="text-white no-underline hover:underline">Home</a></li>
            <li className="mb-2.5"><a href="/how-it-works" className="text-white no-underline hover:underline">How it works</a></li>
            <li className="mb-2.5"><a href="/mission" className="text-white no-underline hover:underline">Our Mission</a></li>
            <li className="mb-2.5"><a href="/contact" className="text-white no-underline hover:underline">Contact</a></li>
          </ul>
        </div>
        <div className="flex-1 m-2.5">
          <h3 className="mb-2.5 text-lg font-semibold">Contact Info</h3>
          <p className="text-sm mb-1">Email: support@moodytravels.com</p>
          <p className="text-sm">Phone: +49 00000000000</p>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-sm">&copy; 2024 MoodyTravels. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;