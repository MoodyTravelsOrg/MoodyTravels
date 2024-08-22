// import { useContext } from 'react';
// import { Context } from '../context/Context.jsx';

// function TravelCategories() {
//     const { selectedEmotion, selectedCategory, setSelectedCategory, handleCategoryClick } = useContext(Context);

//   return (
//     <div className="flex flex-col gap-5">
//         <h2 className="text-xl text-white">Do you prefer to travel to a city, beach or into nature?</h2>
//         <div className='flex gap-2.5'>
//           {selectedEmotion.categories.map(category => (
//               <div
//                 key={category.name}
//                 className={`flex flex-col items-center bg-white/10 rounded-2xl p-5 backdrop-blur-md border border-white/30 transition-transform duration-300 cursor-pointer hover:scale-105 ${selectedCategory.name === category.name ? 'border-2 border-white/70' : ''}`}
//                 onClick={() => setSelectedCategory(category)}
//               >
//                 <img src={category.img} alt={category.name} className="w-24 h-24 object-cover rounded-lg" />
//                 <p className="mt-2.5 text-white text-base">{category.name}</p>
//               </div>
//           ))}
//         </div>
//         <button 
//           onClick={() => handleCategoryClick()}
//           className="px-5 py-2.5 rounded-lg border-none bg-white/30 text-white cursor-pointer transition-colors duration-300 hover:bg-white/50"
//         >
//           get travel recommendations
//         </button>
//     </div>
//   )
// }

// export default TravelCategories;

// * New Styling:

import { useContext } from 'react';
import { Context } from '../context/Context.jsx';

window.scrollTo({
  top: 10,
  behavior: 'smooth'
});

function TravelCategories() {
  const { selectedEmotion, setSelectedEmotion, selectedCategory, setSelectedCategory, handleCategoryClick, setShowCategories, setShowDestinations } = useContext(Context);

  return (
    <div className="flex flex-col items-center py-6 sm:py-8 px-4 sm:px-8">
      <div className="w-full max-w-3xl bg-darkGreenForBG/90 rounded-lg shadow-xl overflow-hidden py-12 sm:py-14 px-6 sm:px-8 ">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-10 text-center">Do you prefer to travel to a city, beach or into nature?</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          {selectedEmotion.categories.map(category => (
            <div
              key={category.name}
              className={`flex flex-col items-center bg-white/20 rounded-xl p-4 sm:p-5  border-yellowishGreenForTextandButtons transition-transform duration-300 cursor-pointer hover:scale-105 ${selectedCategory.name === category.name ? 'scale-105 bg-white/50 border' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              <img src={category.img} alt={category.name} className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg" />
              <p className="mt-2 text-white text-sm sm:text-base">{category.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={()=>{handleCategoryClick(); window.scrollTo({
              top: 1000,
              behavior: 'smooth'
            });}}
            className="bg-yellowishGreenForTextandButtons text-darkGreenForText font-semibold rounded-full px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-white transition duration-300"
          >
            Get travel recommendations
          </button>

          <button
            onClick={() => {setShowCategories(false); setSelectedEmotion({
              emotion: "",
              emoji: "",
              categories: []
            });
          
            window.scrollTo({
              top: 20,
              behavior: 'smooth'
            });
          }}
            className="bg-yellowishGreenForTextandButtons text-darkGreenForText font-semibold rounded-full px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-white transition duration-300"
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
}

export default TravelCategories;
