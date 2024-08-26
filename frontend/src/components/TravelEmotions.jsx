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
import { FaSmile, FaSadTear, FaAngry, FaMeh } from "react-icons/fa";
import { FaFaceGrimace } from "react-icons/fa6";

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
    happy: <FaSmile className="text-yellow-400 text-2xl sm:text-3xl" />,
    sad: <FaSadTear className="text-blue-400 text-2xl sm:text-3xl" />,
    angry: <FaAngry className="text-red-400 text-2xl sm:text-3xl" />,
    anxious: <FaFaceGrimace className="text-green-400 text-2xl sm:text-3xl" />,
    bored: <FaMeh className="text-gray-400 text-2xl sm:text-3xl" />,
  };

  const emotionHoverStyles = {
    happy: "hover:bg-yellow-400 hover:*:text-white",
    sad: "hover:bg-blue-400 hover:*:text-white",
    angry: "hover:bg-red-400 hover:*:text-white",
    anxious: "hover:bg-green-400 hover:*:text-white",
    bored: "hover:bg-gray-400 hover:*:text-white",
  };

  return (
    <div className="flex flex-col items-center mt-6 py-6 px-4 sm:px-8">
      <div className="w-full max-w-4xl bg-darkGreenForBG/90 rounded-lg shadow-xl py-8 sm:py-10 px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
          How are you feeling today?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {recommendations.map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center p-3 rounded-lg bg-white/20 text-white transition-all duration-300 ${
                selectedEmotion === item ? "scale-105 bg-white/50" : "hover:scale-105 "
              } ${emotionHoverStyles[item.emotion]}`}
              onClick={() => {
                setSelectedEmotion(item);
                handleMoodSelect(item.emotion);
              }}
            >
              {/* <span className={`transition-colors ${selectedEmotion === item ? "*:text-white" : ""}`}>
                {React.cloneElement(emojiArray[item.emotion], {
                  className: `${emojiArray[item.emotion].props.className} ${selectedEmotion === item ? "text-white" : ""}`,
                })}
              </span> */}
              {emojiArray[item.emotion]}
              <span className="mt-2 text-sm sm:text-base lg:text-lg transition-colors">
                {item.emotion}
              </span>
            </button>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          {isLoggedIn && (
            <button
              className="bg-yellowishGreenForTextandButtons text-darkGreenForText font-semibold rounded-full px-6 py-2 sm:px-8 sm:py-3 hover:bg-white transition duration-300"
              onClick={handleLogMood}
            >
              Log today's mood
            </button>
          )}
          <button
            className="bg-yellowishGreenForTextandButtons text-darkGreenForText font-semibold rounded-full px-6 py-2 sm:px-8 sm:py-3 hover:bg-white transition duration-300"
            onClick={() => {
              handleEmotionClick(selectedEmotion);
              window.scrollTo({
                top: 1500,
                behavior: "smooth",
              });
            }}
          >
            Want to travel with us?
          </button>
        </div>
      </div>
    </div>
  );
}

export default TravelEmotions;






