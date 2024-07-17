import React, { useContext, useEffect } from 'react';
import './TravelMood.css';
import { Context } from '../../context/Context.jsx';
import TravelCategories from '../TravelCategories.jsx';
import TravelDestinations from '../TravelDestinations.jsx';


// TravelMood component with all the logic for the travel mood selector
const TravelMood = () => {

  const {recommendations, selectedEmotion, selectedCategory, showCategories, showDestinations, 
    handleGetRecommendations, handleEmotionClick, handleCategoryClick, handleDestinationClick, handleBackClick} = useContext(Context)

  useEffect(() => {
    handleGetRecommendations();
  }, []);

  
  return (
    <div className="travel-mood">
      {!showDestinations && (
        <div className="emotions-input">
          <h2 className='travel-title' htmlFor="emotions">How are you feeling today?</h2>
          <div className="emotion-buttons">
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
      {/* {(showCategories || showDestinations) && (
        <button className="back-button" onClick={handleBackClick}>Go Back</button>
      )} */}
    </div>
  );
};

export default TravelMood;

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