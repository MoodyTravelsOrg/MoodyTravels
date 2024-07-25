import React, { useContext } from "react";
import { Context } from "../context/Context";

function TravelEmotions() {
  const {
    recommendations,
    selectedEmotion,
    setSelectedEmotion,
    setSelectedCategory,
    setShowCategories,
    setShowDestinations,
    selectedMood,
    setSelectedMood,
    handleEmotionClick,
    isLoggedIn,
    handleMoodSelect,
    handleLogMood,
  } = useContext(Context);

  function handleGetTravelRecs(emotion) {
    if (!selectedEmotion) {
      alert("Please select an emotion first")
    } else {
      setShowCategories(true);
      setSelectedCategory('');
      setShowDestinations(false);
    }

    console.log(emotion);
    /* setSelectedEmotion(emotion); */
    
  }

  return (
    <div className="flex flex-col items-center gap-2.5">
      <h2 className="text-4xl text-white text-center mb-4">
        How are you feeling today?
      </h2>
      {isLoggedIn ? (
        <>
        <div className="flex gap-2.5">
          {recommendations.map((item, index) => (
            <button
              key={index}
              className={`p-2.5 rounded-lg border-none bg-white/30 text-white cursor-pointer transition-all duration-300 flex flex-col items-center hover:bg-white/50 ${
                selectedEmotion === item ? "scale-110 bg-white/50" : ""
              }`}
              onClick={() => {setSelectedEmotion(item); /* setSelectedMood */handleMoodSelect(item.emotion)}}
            >
              {item.emotion}
            </button>
          ))}
        </div>
        <div>
          <button
            className="bg-white/30 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-gray-400"
            onClick={handleLogMood}
          >
            Log todays mood
          </button>
          <button className="bg-white/30 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-gray-400" onClick={() => handleGetTravelRecs(selectedEmotion)}>Want to travel with us?</button>

          </div>
        </>
        
      ) : (
        <div className="flex gap-2.5">
          {recommendations.map((item) => (
            <button
              key={item.emotion}
              className={`p-2.5 rounded-lg border-none bg-white/30 text-white cursor-pointer transition-all duration-300 flex flex-col items-center hover:bg-white/50 ${
                selectedEmotion.emotion === item.emotion ? "bg-white/50" : ""
              }`}
              onClick={() => handleEmotionClick(item)}
            >
              {item.emotion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default TravelEmotions;
