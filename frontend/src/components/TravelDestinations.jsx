// import { useContext } from 'react';
// import { Context } from '../context/Context.jsx';

// function TravelDestinations() {
//     const { selectedCategory, handleDestinationClick, handleBackClick } = useContext(Context);

//   return (
//     <div className="flex flex-col items-center gap-5">
//       <div className="flex flex-wrap justify-center gap-5">
//         {selectedCategory.destinations.map(destination => (
//           <div 
//             key={destination.name} 
//             className="flex flex-col items-center bg-white/10 rounded-2xl p-5 backdrop-blur-md border border-white/30 transition-transform duration-300 cursor-pointer hover:scale-105 w-64"
//             onClick={() => handleDestinationClick(destination)}
//           >
//             <img src={destination.img} alt={destination.name} className="w-full h-40 object-cover rounded-lg mb-3" />
//             <p className="text-white text-lg font-semibold mb-2">{destination.name}</p>
//             <strong className="text-blue-300">Unlock Travel Deals</strong>
//           </div>
//         ))}
//       </div>
//       <button 
//         className="px-5 py-2.5 rounded-lg border-none bg-white/30 text-white cursor-pointer transition-colors duration-300 hover:bg-white/50 mt-5"
//         onClick={handleBackClick}
//       >
//         Go Back
//       </button>
//     </div>
//   )
// }

// export default TravelDestinations

// * New Styling:

import { useContext } from 'react';
import { Context } from '../context/Context.jsx';

function TravelDestinations() {
  const { selectedCategory, handleDestinationClick, handleBackClick } = useContext(Context);

  return (
    <div className="w-full bg-darkGreenForBG backdrop-blur-md rounded-lg shadow-xl overflow-hidden p-8">
      <div className="flex flex-wrap justify-center gap-5 mb-8">
        {selectedCategory.destinations.map(destination => (
          <div 
            key={destination.name} 
            className="flex flex-col items-center bg-white/10 rounded-2xl p-5 backdrop-blur-md border-2 border-yellowishGreenForTextandButtons transition-transform duration-300 cursor-pointer hover:scale-105 w-full sm:w-64"
            onClick={() => handleDestinationClick(destination)}
          >
            <img src={destination.img} alt={destination.name} className="w-full h-40 object-cover rounded-lg mb-3" />
            <p className="text-white text-lg font-semibold mb-2">{destination.name}</p>
            <strong className="text-yellowishGreenForTextandButtons mt-5">Unlock Travel Deals</strong>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button 
          className="bg-yellowishGreenForTextandButtons text-darkGreenForBG rounded-full px-8 py-3 hover:bg-white transition duration-300"
          onClick={handleBackClick}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default TravelDestinations;