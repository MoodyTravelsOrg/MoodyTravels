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
    isLoggedIn, loggedInUserData, showCategories, showDestinations, 
    handleGetRecommendations, 
  } = useContext(Context);

  useEffect(() => {
    handleGetRecommendations();
    window.scrollTo(0, 0);
  }, []);




  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-6 mt-32 mb-60 px-4 sm:px-8 lg:px-16 w-full">
      <div className="flex-1 flex flex-col p-6 sm:p-8 bg-darkGreenForBG rounded-lg shadow-xl max-w-full lg:max-w-5xl mx-auto">
        {isLoggedIn && (
          <div className="text-lg sm:text-xl text-white text-center mt-4 sm:mt-6 mb-5 sm:mb-7 underline-offset-8">
            Welcome <span className='text-yellowishGreenForTextandButtons font-semibold'>{loggedInUserData.username}</span>!
          </div>
        )}
        {!showDestinations && <TravelEmotions />}
        {showCategories && !showDestinations && <TravelCategories />}
        {showDestinations && <TravelDestinations />}
      </div>
      {isLoggedIn && (
        <aside className="flex-1 w-full max-w-md mx-auto lg:mx-0 lg:mt-0 mt-8 ">
          <MoodPreview />
        </aside>
      )}
    </div>
  );
};

export default TravelMood;
