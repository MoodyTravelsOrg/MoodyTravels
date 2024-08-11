// import React, { useContext } from "react";
// import { Context } from "../context/Context";
// import { FaFaceGrinHearts, FaFaceSadTear, FaFaceAngry, FaFaceGrimace } from "react-icons/fa6";

// function TravelEmotions() {
//   const {
//     recommendations,
//     selectedEmotion,
//     setSelectedEmotion,
//     handleEmotionClick,
//     isLoggedIn,
//     handleMoodSelect,
//     handleLogMood,
//   } = useContext(Context);

//   const emojiArray = [
//     <FaFaceGrinHearts />,
//     <FaFaceSadTear />,
//     <FaFaceAngry />,
//     <FaFaceGrimace />
//   ];

//   return (
//     <div className="flex flex-col items-center gap-2.5">
//       <h2 className="text-4xl text-white text-center mb-4">
//         How are you feeling today?
//       </h2>
//       {isLoggedIn ? (
//         <>
//         <div className="flex gap-2.5">
//           {recommendations.map((item, index) => (
//             <button
//               key={index}
//               className={`p-4 rounded-lg border-none bg-white/30 text-white cursor-pointer transition-all duration-300 flex gap-3 items-center hover:bg-white/50 ${
//                 selectedEmotion === item ? "scale-110 bg-white/50" : ""
//               }`}
//               onClick={() => {
//                 setSelectedEmotion(item); 
//                 console.log(item.emotion);
//                 handleMoodSelect(item.emotion);
//               }}
//             >
              
//               {item.emotion}
//               <span className="text-3xl">{emojiArray[index]}</span> 
//             </button>
//           ))}
//         </div>
//         <div>
//           <button
//             className="bg-white/30 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-gray-400"
//             onClick={handleLogMood}
//           >
//             Log todays mood
//           </button>
//           <button className="bg-white/30 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-gray-400" onClick={() => handleEmotionClick(selectedEmotion)}>Want to travel with us?</button>

//           </div>
//         </>
        
//       ) : (
//         <div className="flex gap-2.5">
//           {recommendations.map((item) => (
//             <button
//               key={item.emotion}
//               className={`p-2.5 rounded-lg border-none bg-white/30 text-white cursor-pointer transition-all duration-300 flex flex-col items-center hover:bg-white/50 ${
//                 selectedEmotion.emotion === item.emotion ? "bg-white/50" : ""
//               }`}
//               onClick={() => handleEmotionClick(item)}
//             >
//               {item.emotion}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default TravelEmotions;

// * New Styling:

import React, { useContext } from "react";
import { Context } from "../context/Context";
import { FaSmile, FaSadTear, FaAngry, FaMeh, FaFrown } from "react-icons/fa";

function TravelEmotions() {
  const {
    recommendations,
    selectedEmotion,
    setSelectedEmotion,
    handleEmotionClick,
    isLoggedIn,
    handleMoodSelect,
    handleLogMood,
  } = useContext(Context);

  const emojiArray = {
    happy: <FaSmile className="text-yellow-400" />,
    sad: <FaSadTear className="text-blue-400" />,
    angry: <FaAngry className="text-red-400" />,
    anxious: <FaMeh className="text-green-400" />,
    bored: <FaFrown className="text-gray-400" />,
  };

  const emotionHoverColors = {
    happy: 'hover:bg-yellow-400',
    sad: 'hover:bg-blue-400',
    angry: 'hover:bg-red-400',
    anxious: 'hover:bg-green-400',
    bored: 'hover:bg-gray-400',
  };

  return (
    <div className="flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-3xl bg-darkGreenForBG rounded-lg shadow-xl overflow-hidden p-8 backdrop-blur-md">
        <h2 className="text-5xl font-bold text-white mb-8 text-center">How are you feeling today?</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {recommendations.map((item, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg border-none bg-white/30 text-white cursor-pointer transition-all duration-300 flex gap-3 items-center ${emotionHoverColors[item.emotion]} ${selectedEmotion === item ? "scale-110 bg-white/50" : ""}`}
              onClick={() => {
                setSelectedEmotion(item);
                handleMoodSelect(item.emotion);
              }}
            >
              {item.emotion}
              <span className="text-3xl">{emojiArray[item.emotion]}</span>
            </button>
          ))}
        </div>
        {isLoggedIn && (
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <button className="bg-yellowishGreenForTextandButtons text-darkGreenForBG rounded-full px-8 py-3 hover:bg-white transition duration-300" onClick={handleLogMood}>Log today's mood</button>
            <button className="bg-yellowishGreenForTextandButtons text-darkGreenForBG rounded-full px-8 py-3 hover:bg-white transition duration-300" onClick={() => handleEmotionClick(selectedEmotion)}>Want to travel with us?</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TravelEmotions;