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
    <div className="w-full bg-darkGreenForBG rounded-lg shadow-xl overflow-hidden py-6 sm:py-14 px-6 sm:px-8">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-2 sm:mb-8 ">
        {selectedCategory.destinations.map(destination => (
          <div 
            key={destination.name} 
            className="flex flex-col items-center bg-white/20 rounded-xl p-4 sm:p-5  border-yellowishGreenForTextandButtons transition-transform duration-300 cursor-pointer hover:scale-105 hover:border w-full sm:w-64"
            onClick={() => handleDestinationClick(destination)}
          >
            <img src={destination.img} alt={destination.name} className="w-full h-36 sm:h-40 object-cover rounded-lg mb-2.5 sm:mb-3" />
            <p className="text-white text-base sm:text-lg font-semibold mb-2">{destination.name}</p>
            <strong className="text-yellowishGreenForTextandButtons mt-3 sm:mt-5">Unlock Travel Deals</strong>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button 
          className="bg-yellowishGreenForTextandButtons text-darkGreenForText font-semibold rounded-full px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-white transition duration-300"
          onClick={handleBackClick}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default TravelDestinations;
