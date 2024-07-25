// import { useContext } from 'react';
// import { Context } from '../context/Context.jsx';
// // ? For whatever reason, this comp did not have an imported stylesheet... Gonna add it now via Tailwind.

// function TravelDestinations() {
//     const { selectedCategory, handleDestinationClick, handleBackClick } = useContext(Context);

//   return (
//     <>
//     <div className="destinations">
//           {selectedCategory.destinations.map(destination => (
//             <div 
//               key={destination.name} 
//               className="destination" 
//               onClick={() => handleDestinationClick(destination)}
//             >
//               <img src={destination.img} alt={destination.name} />
//               <p>{destination.name}</p>
//               <div className="links">
//                 <a href="" target="_blank" rel="noopener noreferrer">Tips</a>
//                 <a href="" target="_blank" rel="noopener noreferrer">Flights</a>
//                 <a href="" target="_blank" rel="noopener noreferrer">Accommodation</a>
//                 <a href="" target="_blank" rel="noopener noreferrer">Guides</a>
//                 <a href="" target="_blank" rel="noopener noreferrer">Things to Do</a>
//               </div>
//             </div>
//           ))}
//     </div>
//     <button className="back-button" onClick={handleBackClick}>Go Back</button>
//     </> 
//   )
// }

// export default TravelDestinations;

// ! Tailwind CSS:

// TravelDestinations.jsx

import { useContext } from 'react';
import { Context } from '../context/Context.jsx';

function TravelDestinations() {
    const { selectedCategory, handleDestinationClick, handleBackClick } = useContext(Context);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-wrap justify-center gap-5">
        {selectedCategory.destinations.map(destination => (
          <div 
            key={destination.name} 
            className="flex flex-col items-center bg-white/10 rounded-2xl p-5 backdrop-blur-md border border-white/30 transition-transform duration-300 cursor-pointer hover:scale-105 w-64"
            onClick={() => handleDestinationClick(destination)}
          >
            <img src={destination.img} alt={destination.name} className="w-full h-40 object-cover rounded-lg mb-3" />
            <p className="text-white text-lg font-semibold mb-2">{destination.name}</p>
            <strong className="text-blue-300">Unlock Travel Deals</strong>
          </div>
        ))}
      </div>
      <button 
        className="px-5 py-2.5 rounded-lg border-none bg-white/30 text-white cursor-pointer transition-colors duration-300 hover:bg-white/50 mt-5"
        onClick={handleBackClick}
      >
        Go Back
      </button>
    </div>
  )
}

export default TravelDestinations