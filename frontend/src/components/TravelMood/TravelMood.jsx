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
import TravelEmotions from '../TravelEmotions.jsx';
import TravelCategories from '../TravelCategories.jsx';
import TravelDestinations from '../TravelDestinations.jsx';
import MoodPreview from '../MoodPreview.jsx';


const TravelMood = () => {
  const {
    isLoggedIn, loggedInUserData, recommendations, selectedEmotion, showCategories, showDestinations, 
    handleGetRecommendations, handleEmotionClick
  } = useContext(Context);

  useEffect(() => {
    handleGetRecommendations();
  }, []);

  return (
    <div className="flex items-center gap-5 mt-48 ml-48 mr-48">
      <div className="flex flex-col gap-5 p-5 text-center bg-white/5 rounded-3xl shadow-lg backdrop-blur-md border border-white/30 mb-24">
        {isLoggedIn && (
          <div className="text-xl text-white">
            Welcome {loggedInUserData.username}
          </div>
        )}
        {!showDestinations && (
          <TravelEmotions />
        )}
        {showCategories && !showDestinations && (
          <TravelCategories />
        )}
        {showDestinations && (
          <TravelDestinations />
        )}
      </div>
      {isLoggedIn && (
        <aside className="mt-0">
          <MoodPreview />
        </aside>
      )}
    </div>
  );
};

export default TravelMood;