// import React, { useContext, useEffect } from 'react';
// import './MoodTracker.css';
// import { Context } from '../../context/Context.jsx';

// const MoodTracker = () => {
//   const {
//     selectedMood, recommendations, edit, setEdit,
//     handleLogMood, handleDeleteMood, handleMoodSelect, handleReplaceMood,
//     handleGetRecommendations, loggedInUserData
//   } = useContext(Context);

  

//   return (
//     <div className="MoodTrackerContainer">
//       <h2>Mood Tracker</h2>
//       <div className="MoodListContainer">
//         {['happy', 'sad', 'angry', 'anxious', 'bored'].map((mood, index) => (
//           <button
//             key={index}
//             className={`MoodButton ${selectedMood === mood ? 'selected' : ''}`}
//             onClick={() => handleMoodSelect(mood)}
//           >
//             {mood}
//           </button>
//         ))}
//       </div>
//       <div>
//         <button className="ActionButton" onClick={handleLogMood}>Log Mood</button>
//         {(!edit && loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0) && (
//           <button className="ActionButton" onClick={() => setEdit(!edit)}>Edit Log</button>
//         )}
//         {(edit && loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0) && (
//           <button className="ActionButton" onClick={() => setEdit(!edit)}>End Edit</button>
//         )}
//         <button className="ActionButton" onClick={handleGetRecommendations}>Get Recommendations</button>
//       </div>

//       <div className="MoodLogContainer">
//         <h3>Mood Log</h3>
//         {loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0 ? (
//           loggedInUserData.moods.map((entry) => {
//             const date = new Date(entry.createdAt);
//             const formattedDate = date.toLocaleDateString();
//             const formattedTime = date.toLocaleTimeString();
//             return (
//               <div key={entry._id} className="LogEntry">
//                 <p><span>{formattedDate} at {formattedTime}</span></p>
//                 <h4>{entry.type}</h4>
//                 {edit && (
//                   <>
//                     <button onClick={() => handleDeleteMood(entry._id)} className='editBtn'>Delete</button>
//                     <button onClick={() => handleReplaceMood(entry._id)} className='editBtn'>Replace</button>
//                   </>
//                 )}
//               </div>
//             );
//           })
//         ) : (
//           <p>No moods logged yet.</p>
//         )}
//       </div>

//       <h3>Recommendations</h3>

//       {/* <div className="RecommendationsContainer">
//         <h3>Recommendations</h3>
//         {recommendations.map((rec, index) => (
//           <div key={index}>
//             <h4>{rec.emotion}</h4>
//             <p>{rec.emoji}</p>
//             {rec.categories.map((cat, idx) => (
//               <div key={idx}>
//                 <h5>{cat.name}</h5>
//                 {cat.destinations.map((dest, i) => (
//                   <div key={i}>
//                     <img src={dest.img} alt={dest.name} />
//                     <p>{dest.name}</p>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default MoodTracker;

// ! Tailwind CSS:

import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/Context.jsx';

const MoodTracker = () => {
  const {
    selectedMood, recommendations, edit, setEdit,
    handleLogMood, handleDeleteMood, handleMoodSelect, handleReplaceMood,
    handleGetRecommendations, loggedInUserData
  } = useContext(Context);

  return (
    <div className="p-5 m-5">
      <h2 className="text-2xl font-bold mb-4">Mood Tracker</h2>
      <div className="rounded-lg p-5 my-5 bg-white/5 shadow-lg backdrop-blur-md">
        {['happy', 'sad', 'angry', 'anxious', 'bored'].map((mood, index) => (
          <button
            key={index}
            className={`bg-white/40 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-white/50 ${selectedMood === mood ? 'scale-110 bg-white/50' : ''}`}
            onClick={() => handleMoodSelect(mood)}
          >
            {mood}
          </button>
        ))}
      </div>
      <div>
        <button className="bg-white/30 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-gray-400" onClick={handleLogMood}>Log Mood</button>
        {(!edit && loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0) && (
          <button className="bg-white/30 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-gray-400" onClick={() => setEdit(!edit)}>Edit Log</button>
        )}
        {(edit && loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0) && (
          <button className="bg-white/30 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-gray-400" onClick={() => setEdit(!edit)}>End Edit</button>
        )}
        {/* <button className="bg-white/30 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-gray-400" onClick={handleGetRecommendations}>Get Recommendations</button> */}
      </div>

      <div className="bg-white/10 rounded-lg backdrop-blur-md shadow-lg p-5 my-5 relative">
        <h3 className="text-xl font-semibold mb-3">Mood Log</h3>
        {loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0 ? (
          loggedInUserData.moods.toReversed().map((entry) => {
            const date = new Date(entry.createdAt);
            const options = {
              weekday: 'short',
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            };
            const formattedDate = date.toLocaleDateString("de-DE", options);
            /* const formattedTime = date.toLocaleTimeString(); */
            return (
              <div key={entry._id} className="my-2 flex items-center justify-between">
                <div className="flex gap-5">
                  <p><span>{formattedDate}{/*  at {formattedTime} */}</span></p>
                  <h4 className="font-medium">{entry.type}</h4>
                </div>
                {edit && (
                  <div>
                    <button onClick={() => handleDeleteMood(entry._id)} className="h-6 px-4 text-xs min-w-[5rem] hover:bg-red-500 transition-colors duration-300">Delete</button>
                    <button onClick={() => handleReplaceMood(entry._id)} className="h-6 px-4 text-xs min-w-[5rem] hover:bg-blue-500 transition-colors duration-300 ml-2">Replace</button>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p>No moods logged yet.</p>
        )}
      </div>

      {/* <h3 className="text-xl font-semibold mb-3">Recommendations</h3> */}

      {/* Someone already commented this part out in the original code. If needed in the future, it's still there (see above)*/}
    </div>
  );
};

export default MoodTracker;