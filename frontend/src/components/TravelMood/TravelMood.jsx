// import React, { useContext, useEffect } from 'react';
// import './TravelMood.css';
// import { Context } from '../../context/Context.jsx';
// import TravelCategories from '../TravelCategories.jsx';
// import TravelDestinations from '../TravelDestinations.jsx';


// // TravelMood component with all the logic for the travel mood selector
// const TravelMood = () => {

//   const {recommendations, selectedEmotion, selectedCategory, showCategories, showDestinations, 
//     handleGetRecommendations, handleEmotionClick, handleCategoryClick, handleDestinationClick, handleBackClick} = useContext(Context)

//   useEffect(() => {
//     handleGetRecommendations();
//   }, []);

  
//   return (
//     <div className="travel-mood">
//       {!showDestinations && (
//         <div className="emotions-input">
//           <h2 className='travel-title' htmlFor="emotions">How are you feeling today?</h2>
//           <div className="emotion-buttons">
//             {recommendations.map(item => (
//               <button 
//                 key={item.emotion} 
//                 className={`emotion-button ${selectedEmotion.emotion === item.emotion ? 'selected' : ''}`} 
//                 onClick={() => handleEmotionClick(item)}
//               >
//                 <span className="emoji">{item.emoji}</span>
//                 {item.emotion}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//       {showCategories && !showDestinations && (
//         <TravelCategories />
//       )}
//       {showDestinations && (
//         <TravelDestinations />
//       )}
//       {/* {(showCategories || showDestinations) && (
//         <button className="back-button" onClick={handleBackClick}>Go Back</button>
//       )} */}
//     </div>
//   );
// };

// export default TravelMood;

// ? As per GitHub history, Alexis added this comment on the 17th of July - underneath the return statement. Just to keep it here for reference:

{/* <div className="travel-mood">
      {!showCategories && (
        <div className="emotions-input">
          <label className='travel-title' htmlFor="emotions">How are you feeling today?</label>
          <div className="emotions-buttons">
            {recommendations.map(item => (
              <button 
                key={item.emotion} 
                className={`emotion-button ${selectedEmotion.emotion === item.emotion ? 'selected' : ''}`} 
                onClick={() => handleEmotionClick(item)}
              >
                <span className="emoji">{item.emoji}</span>
                {item.emotion}
              </button>
            ))}
          </div>
        </div>
      )}
      {showCategories && !showDestinations && (
        <TravelCategories />
      )}
      {showDestinations && (
        <TravelDestinations />
      )}
      {(showCategories || showDestinations) && (
        <button className="back-button" onClick={handleBackClick}>Go Back</button>
      )}
</div> */}

// ? --------------------------------------------------------------------------------

// ! Now, the Tailwind CSS:

import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/Context.jsx';
import TravelCategories from '../TravelCategories.jsx';
import TravelDestinations from '../TravelDestinations.jsx';

const TravelMood = () => {
  const {
    recommendations, selectedEmotion, showCategories, showDestinations, 
    handleGetRecommendations, handleEmotionClick
  } = useContext(Context);

  useEffect(() => {
    handleGetRecommendations();
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 ml-96 mr-96 p-5 text-center bg-white/5 rounded-3xl shadow-lg backdrop-blur-md border border-white/30 mb-24">
      {!showDestinations && (
        <div className="flex flex-col items-center gap-2.5">
          <p className='text-1xl text-white'>...or start your journey without a spirit companion:</p>
          <h2 className="text-4xl text-white text-center mb-4">So, how are you feeling today?</h2>
          <div className="flex gap-2.5">
            {recommendations.map(item => (
              <button 
                key={item.emotion} 
                className={`p-2.5 rounded-lg border-none bg-white/30 text-white cursor-pointer transition-all duration-300 flex flex-col items-center hover:bg-white/50 ${selectedEmotion.emotion === item.emotion ? 'bg-white/50' : ''}`} 
                onClick={() => handleEmotionClick(item)}
              >
                <span className="text-4xl animate-bounce">{item.emoji}</span>
                {item.emotion}
              </button>
            ))}
          </div>
        </div>
      )}
      {showCategories && !showDestinations && (
        <TravelCategories />
      )}
      {showDestinations && (
        <TravelDestinations />
      )}
    </div>
  );
};

export default TravelMood;