// import React from "react";
// import "./Homepage.css";
// import TravelMood from "../components/TravelMood/TravelMood";

// const Homepage = () => {
//   return (
//     <>
//     <div className="homepage-container">
//       <div className="glass-effect">
//         <h1>Welcome to MoodyTravels</h1>
//         <p>
//           We are glad to have you here. On our platform, you will find the best
//           information and resources you need. Explore and enjoy!
//         </p>
//       </div>
//       <TravelMood />
//     </div>
    
//     </> 
//   );
// };

// export default Homepage;

//  ! Here's the same component using Tailwind CSS classes:

import React from "react";
import TravelMood from "../components/TravelMood/TravelMood";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full mx-auto bg-white/5 rounded-[10px] shadow-lg backdrop-blur-[10px] border border-white/30 bg-cover bg-center bg-no-repeat">
      <div className="p-5 text-center w-full h-auto max-w-5xl max-h-[800px] text-white">
        <h1 className="text-4xl mb-4">Welcome to MoodyTravels</h1>
        <p className="text-2xl">
          We are glad to have you here. On our platform, you will find the best
          information and resources you need. Explore and enjoy!
        </p>
      </div>
      <TravelMood />
    </div>
  );
};

export default Homepage;