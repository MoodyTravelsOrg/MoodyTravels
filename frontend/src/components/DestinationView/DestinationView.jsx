// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './DestinationView.css';

// const DestinationDetail = () => {

//   const location = useLocation();
//   const { destination } = location.state;

//   return (
//     <div className="destination-detail">
//       <h1>{destination.name}</h1>
//       <img src={destination.img} alt={destination.name} />
//       <div className="details">
//         <p>Here are some details about {destination.name}.</p>
//         <div className="links">
//           <a href="" target="_blank" rel="noopener noreferrer">Tips</a>
//           <a href="" target="_blank" rel="noopener noreferrer">Flights</a>
//           <a href="" target="_blank" rel="noopener noreferrer">Accommodation</a>
//           <a href="" target="_blank" rel="noopener noreferrer">Guides</a>
//           <a href="" target="_blank" rel="noopener noreferrer">Things to Do</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DestinationDetail;

// ! Tailwind CSS:

import React from 'react';
import { useLocation } from 'react-router-dom';


const DestinationDetail = () => {
  const location = useLocation();
  const { destination } = location.state;


  return (
    <div className="flex flex-col items-center p-5 bg-white/5 rounded-2xl shadow-lg backdrop-blur-md border border-white/30 mt-16">
      <h1 className="text-4xl text-white text-center">{destination.name}</h1>
      <img src={destination.img} alt={destination.name} className="w-72 h-48 object-cover rounded-lg mt-5" />
      <div className="mt-5 text-center text-white">
        <p className="text-white text-lg font-semibold mb-2">Here are some details about {destination.name}.</p>
        <div className="flex flex-col gap-1 mt-2">
          <a href={`https://www.lonelyplanet.com/${destination.country}`} target="_blank" rel="noopener noreferrer" className="text-white no-underline transition-colors duration-300 hover:text-blue-500">Tips</a>
          <a href="https://www.tripadvisor.com/CheapFlightsHome" target="_blank" rel="noopener noreferrer" className="text-white no-underline transition-colors duration-300 hover:text-blue-500">Flights</a>
          <a href={`https://www.tripadvisor.com/Search?q=${destination.province}&geo=1&ssrc=h&searchNearby=false&searchSessionId=001eae3e0a5218dd.ssid&blockRedirect=true&offset=0`} target="_blank" rel="noopener noreferrer" className="text-white no-underline transition-colors duration-300 hover:text-blue-500">Accommodation</a>
          <a href={`https://www.frommers.com/search/index.html?sp_q%3D=${destination.province}`} target="_blank" rel="noopener noreferrer" className="text-white no-underline transition-colors duration-300 hover:text-blue-500">Guides</a>
          <a href={`https://www.tripadvisor.com/Search?q=${destination.province}&geo=1&ssrc=A&searchNearby=false&searchSessionId=001eae3e0a5218dd.ssid&blockRedirect=true&offset=0`} target="_blank" rel="noopener noreferrer" className="text-white no-underline transition-colors duration-300 hover:text-blue-500">Things to Do</a>

        </div>



      </div>
    </div>
  );

};

export default DestinationDetail;