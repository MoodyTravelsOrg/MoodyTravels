// import React, { useContext, useEffect } from 'react';
// import { Context } from '../../context/Context.jsx';
// import TravelEmotions from '../TravelEmotions.jsx';
// import TravelCategories from '../TravelCategories.jsx';
// import TravelDestinations from '../TravelDestinations.jsx';
// import MoodPreview from '../MoodPreview.jsx';


// const TravelMood = () => {
//   const {
//     isLoggedIn, loggedInUserData, recommendations, selectedEmotion, showCategories, showDestinations, 
//     handleGetRecommendations, handleEmotionClick
//   } = useContext(Context);

//   useEffect(() => {
//     handleGetRecommendations();
//   }, []);

//   return (
//     <div className="flex items-center gap-5 mt-48 ml-48 mr-48">
//       <div className="flex flex-col gap-5 p-5 text-center mb-24 bg-darkGreenForBG rounded-lg shadow-xl overflow-hidden">
//         {isLoggedIn && (
//           <div className="text-xl text-white">
//             Welcome {loggedInUserData.username}
//           </div>
//         )}
//         {!showDestinations && (
//           <TravelEmotions />
//         )}
//         {showCategories && !showDestinations && (
//           <TravelCategories />
//         )}
//         {showDestinations && (
//           <TravelDestinations />
//         )}
//       </div>
//       {isLoggedIn && (
//         <aside className="mt-0">
//           <MoodPreview />
//         </aside>
//       )}
//     </div>
//   );
// };

// export default TravelMood;

// * New Styling:

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
    <div className="flex flex-col lg:flex-row justify-center items-start gap-4 mt-16 pl-24 pr-4">
      <div className="flex-1 flex flex-col gap-5 p-8 bg-darkGreenForBG rounded-lg shadow-xl overflow-hidden max-w-full lg:max-w-5xl mx-auto">
        {isLoggedIn && (
          <div className="text-xl text-white mb-0 ml-5 underline underline-offset-8">
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
        <aside className="flex-1 w-full max-w-xs mx-auto lg:mx-0">
          <MoodPreview />
        </aside>
      )}
    </div>
  );
};

export default TravelMood;