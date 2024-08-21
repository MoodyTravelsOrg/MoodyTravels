// import React, { useContext, useEffect } from 'react';
// import { Context } from '../../context/Context.jsx';

// const MoodTracker = () => {
//   const {
//     selectedMood, recommendations, edit, setEdit,
//     handleLogMood, handleDeleteMood, handleMoodSelect, handleReplaceMood,
//     handleGetRecommendations, loggedInUserData
//   } = useContext(Context);

//   return (
//     <div className="p-5 m-5">
//       <h2 className="text-2xl font-bold mb-4">Mood Tracker</h2>
//       <div className="rounded-lg p-5 my-5 bg-white/5 shadow-lg backdrop-blur-md">
//         {['happy', 'sad', 'angry', 'anxious', 'bored'].map((mood, index) => (
//           <button
//             key={index}
//             className={`bg-white/40 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-white/50 ${selectedMood === mood ? 'scale-110 bg-white/50' : ''}`}
//             onClick={() => handleMoodSelect(mood)}
//           >
//             {mood}
//           </button>
//         ))}
//       </div>
//       <div>
//         <button className="bg-white/30 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-gray-400" onClick={handleLogMood}>Log Mood</button>
//         {(!edit && loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0) && (
//           <button className="bg-white/30 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-gray-400" onClick={() => setEdit(!edit)}>Edit Log</button>
//         )}
//         {(edit && loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0) && (
//           <button className="bg-white/30 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-gray-400" onClick={() => setEdit(!edit)}>End Edit</button>
//         )}
//         {/* <button className="bg-white/30 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-gray-400" onClick={handleGetRecommendations}>Get Recommendations</button> */}
//       </div>

//       <div className="bg-white/10 rounded-lg backdrop-blur-md shadow-lg p-5 my-5 relative">
//         <h3 className="text-xl font-semibold mb-3">Mood Log</h3>
//         {loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0 ? (
//           loggedInUserData.moods.toReversed().map((entry) => {
//             const date = new Date(entry.createdAt);
//             const options = {
//               weekday: 'short',
//               year: 'numeric',
//               month: 'numeric',
//               day: 'numeric',
//             };
//             const formattedDate = date.toLocaleDateString("de-DE", options);
//             /* const formattedTime = date.toLocaleTimeString(); */
//             return (
//               <div key={entry._id} className="my-2 flex items-center justify-between">
//                 <div className="flex gap-5">
//                   <p><span>{formattedDate}{/*  at {formattedTime} */}</span></p>
//                   <h4 className="font-medium">{entry.type}</h4>
//                 </div>
//                 {edit && (
//                   <div>
//                     <button onClick={() => handleDeleteMood(entry._id)} className="h-6 px-4 text-xs min-w-[5rem] hover:bg-red-500 transition-colors duration-300">Delete</button>
//                     <button onClick={() => handleReplaceMood(entry._id)} className="h-6 px-4 text-xs min-w-[5rem] hover:bg-blue-500 transition-colors duration-300 ml-2">Replace</button>
//                   </div>
//                 )}
//               </div>
//             );
//           })
//         ) : (
//           <p>No moods logged yet.</p>
//         )}
//       </div>

//       {/* <h3 className="text-xl font-semibold mb-3">Recommendations</h3> */}

//       {/* Someone already commented this part out in the original code. If needed in the future, it's still there (see above)*/}
//     </div>
//   );
// };

// export default MoodTracker;

// * New styling:

// import React, { useContext } from 'react';
// import { Context } from '../../context/Context.jsx';
// import { FaSmile, FaFrown, FaAngry, FaMeh, FaSadTear } from 'react-icons/fa';

// const MoodTracker = () => {
//   const {
//     selectedMood, recommendations, edit, setEdit,
//     handleLogMood, handleDeleteMood, handleMoodSelect, handleReplaceMood,
//     handleGetRecommendations, loggedInUserData
//   } = useContext(Context);

//   const moodIcons = {
//     happy: <FaSmile className="text-yellow-400" />,
//     sad: <FaSadTear className="text-blue-400" />,
//     angry: <FaAngry className="text-red-400" />,
//     anxious: <FaMeh className="text-green-400" />,
//     bored: <FaFrown className="text-gray-400" />,
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen pt-32 pb-16 px-4">
//       <div className="w-full max-w-4xl bg-darkGreenForBG rounded-lg shadow-xl overflow-hidden">
//         <div className="p-12">
//           <h2 className="text-5xl font-bold text-white mb-8 text-center">Mood Tracker</h2>
//           <div className="flex justify-center space-x-4 mb-8">
//             {['happy', 'sad', 'angry', 'anxious', 'bored'].map((mood, index) => (
//               <button
//                 key={index}
//                 className={`bg-white/40 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-white/50 ${selectedMood === mood ? 'scale-110 bg-white/50' : ''}`}
//                 onClick={() => handleMoodSelect(mood)}
//               >
//                 {mood}
//               </button>
//             ))}
//           </div>
//           <div className="flex justify-center space-x-4 mb-8">
//             <button className="bg-yellowishGreenForTextandButtons text-darkGreenForBG rounded-full px-8 py-3 hover:bg-white transition duration-300" onClick={handleLogMood}>Log Mood</button>
//             {(!edit && loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0) && (
//               <button className="bg-yellowishGreenForTextandButtons text-darkGreenForBG rounded-full px-8 py-3 hover:bg-white transition duration-300" onClick={() => setEdit(!edit)}>Edit Log</button>
//             )}
//             {(edit && loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0) && (
//               <button className="bg-yellowishGreenForTextandButtons text-darkGreenForBG rounded-full px-8 py-3 hover:bg-white transition duration-300" onClick={() => setEdit(!edit)}>End Edit</button>
//             )}
//           </div>
//           <div className="bg-white/10 rounded-lg backdrop-blur-md shadow-lg p-5 my-5">
//             <h3 className="text-xl font-semibold text-white mb-3">Mood Log</h3>
//             {loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0 ? (
//               loggedInUserData.moods.toReversed().map((entry) => {
//                 const date = new Date(entry.createdAt);
//                 const options = {
//                   weekday: 'short',
//                   year: 'numeric',
//                   month: 'numeric',
//                   day: 'numeric',
//                 };
//                 const formattedDate = date.toLocaleDateString("de-DE", options);
//                 return (
//                   <div key={entry._id} className="my-2 flex items-center justify-between text-white bg-darkGreenForBG p-3 rounded-lg shadow-md">
//                     <div className={`flex items-center gap-3 w-full ${edit ? 'justify-start' : 'justify-center'}`}>
//                       <div className="flex items-center gap-3">
//                         {moodIcons[entry.type]}
//                         <div className="flex flex-col">
//                           <p className="text-sm">{formattedDate}</p>
//                           <h4 className="font-medium text-lg">{entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}</h4>
//                         </div>
//                       </div>
//                     </div>
//                     {edit && (
//                       <div className="flex gap-2">
//                         <button onClick={() => handleDeleteMood(entry._id)} className="bg-red-500 text-white rounded-full px-4 py-1 text-xs hover:bg-red-600 transition-colors duration-300">Delete</button>
//                         <button onClick={() => handleReplaceMood(entry._id)} className="bg-blue-500 text-white rounded-full px-4 py-1 text-xs hover:bg-blue-600 transition-colors duration-300">Replace</button>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })
//             ) : (
//               <p className="text-white">No moods logged yet.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MoodTracker;

import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/Context.jsx';
import { FaSmile, FaAngry, FaMeh, FaSadTear } from 'react-icons/fa';
import { FaFaceGrimace } from "react-icons/fa6";

const MoodTracker = () => {
  const { selectedMood, edit, setEdit, handleLogMood, handleDeleteMood, handleMoodSelect, handleReplaceMood, loggedInUserData } = useContext(Context);

  const moodIcons = {
    happy: <FaSmile className="text-3xl sm:text-4xl text-yellow-400" />,
    sad: <FaSadTear className="text-3xl sm:text-4xl text-blue-400" />,
    angry: <FaAngry className="text-3xl sm:text-4xl text-red-400" />,
    anxious: <FaFaceGrimace className="text-3xl sm:text-4xl text-green-400" />,
    bored: <FaMeh className="text-3xl sm:text-4xl text-gray-400" />,
  };

  const moodHoverColors = {
    happy: 'hover:bg-yellow-400 hover:text-white',
    sad: 'hover:bg-blue-400 hover:text-white',
    angry: 'hover:bg-red-400 hover:text-white',
    anxious: 'hover:bg-green-400 hover:text-white',
    bored: 'hover:bg-gray-400 hover:text-white',
  };

  useEffect(()=>{
    window.scrollTo(0, 0)
  })
  return (
    <div className="flex justify-center items-center min-h-screen pt-28 pb-16 px-4">
      <div className="w-full max-w-4xl bg-darkGreenForBG rounded-lg shadow-xl overflow-hidden">
        <div className="p-8 sm:p-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-8 text-center">Mood Log</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            {['happy', 'sad', 'angry', 'anxious'].map((mood, index) => (
              <button
                key={index}
                className={`p-3 sm:p-4 rounded-lg bg-white/30 text-white cursor-pointer transition-all duration-300 flex gap-2 sm:gap-3 items-center ${moodHoverColors[mood]} ${selectedMood === mood ? 'scale-105 bg-white/50' : ''}`}
                onClick={() => handleMoodSelect(mood)}
              >
                {mood.charAt(0).toUpperCase() + mood.slice(1)}
                {moodIcons[mood]}
              </button>
            ))}
          </div>
          <div className="flex justify-center space-x-4 mb-6 sm:mb-8">
            <button className="bg-yellowishGreenForTextandButtons text-darkGreenForText font-semibold rounded-full px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-white transition duration-300" onClick={handleLogMood}>
              Log Mood
            </button>
            {loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0 && (
              <button className="bg-yellowishGreenForTextandButtons text-darkGreenForText font-semibold rounded-full px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-white transition duration-300" onClick={() => setEdit(!edit)}>
                {edit ? 'End Edit' : 'Edit Log'}
              </button>
            )}
          </div>
          <div className="bg-white/10 rounded-lg backdrop-blur-md shadow-lg p-5 sm:p-8 my-5">
            <h3 className="text-xl font-semibold text-white mb-3">Mood History</h3>
            {loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0 ? (
              loggedInUserData.moods.toReversed().map((entry) => {
                const date = new Date(entry.createdAt);
                const formattedDate = date.toLocaleDateString("de-DE", {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                });
                return (
                  <div key={entry._id} className="my-2 flex items-center justify-between text-white bg-darkGreenForBG p-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-darkGreenForBG/80 border-double border-4 border-yellowishGreenForTextandButtons">
                    <div className={`flex items-center gap-3 w-full ${edit ? 'justify-start' : 'justify-center'}`}>
                      <div className="flex items-center gap-3">
                        {moodIcons[entry.type]}
                        <div className="flex flex-col">
                          <p className="text-sm">{formattedDate}</p>
                          <h4 className="font-medium text-lg">{entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}</h4>
                        </div>
                      </div>
                    </div>
                    {edit && (
                      <div className="flex gap-2">
                        <button onClick={() => handleDeleteMood(entry._id)} className="bg-red-500 text-white rounded-full px-4 py-1 text-xs hover:bg-red-600 transition-colors duration-300">Delete</button>
                        <button onClick={() => handleReplaceMood(entry._id)} className="bg-blue-500 text-white rounded-full px-4 py-1 text-xs hover:bg-blue-600 transition-colors duration-300">Replace</button>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-white text-center">No moods logged yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
