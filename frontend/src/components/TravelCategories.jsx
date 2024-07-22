// import { useContext } from 'react';
// import { Context } from '../context/Context.jsx';
// import './TravelMood/TravelMood.css';

// function TravelCategories() {
//     const { selectedEmotion, selectedCategory, setSelectedCategory, handleCategoryClick } = useContext(Context);

//   return (
//     <div className="travel-categories">
//         <h2>Do you prefer to travel to a city, 
//         beach or into nature?</h2>
//         <div className='categories-wrapper'>
//           {selectedEmotion.categories.map(category => (
//               <div
//                 key={category.name}
//                 className={`category ${selectedCategory.name === category.name ? 'selected' : ''}`}
//                 onClick={() => setSelectedCategory(category)}
//               >
//                 <img src={category.img} alt={category.name} />
//                 <p>{category.name}</p>
//               </div>
//           ))}
//         </div>
//         <button onClick={() => handleCategoryClick()}>get travel recommendations</button>
//     </div>
//   )
// }

// export default TravelCategories;

//  ! Tailwind CSS:

// TravelCategories.jsx

import { useContext } from 'react';
import { Context } from '../context/Context.jsx';

function TravelCategories() {
    const { selectedEmotion, selectedCategory, setSelectedCategory, handleCategoryClick } = useContext(Context);

  return (
    <div className="flex flex-col gap-5">
        <h2 className="text-xl text-white">Do you prefer to travel to a city, beach or into nature?</h2>
        <div className='flex gap-2.5'>
          {selectedEmotion.categories.map(category => (
              <div
                key={category.name}
                className={`flex flex-col items-center bg-white/10 rounded-2xl p-5 backdrop-blur-md border border-white/30 transition-transform duration-300 cursor-pointer hover:scale-105 ${selectedCategory.name === category.name ? 'border-2 border-white/70' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                <img src={category.img} alt={category.name} className="w-24 h-24 object-cover rounded-lg" />
                <p className="mt-2.5 text-white text-base">{category.name}</p>
              </div>
          ))}
        </div>
        <button 
          onClick={() => handleCategoryClick()}
          className="px-5 py-2.5 rounded-lg border-none bg-white/30 text-white cursor-pointer transition-colors duration-300 hover:bg-white/50"
        >
          get travel recommendations
        </button>
    </div>
  )
}

export default TravelCategories;