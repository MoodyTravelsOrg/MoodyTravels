import React, { useContext, useEffect } from 'react';
import './TravelMood.css';
import { Context } from '../../context/Context.jsx';
import TravelCategories from '../TravelCategories.jsx';


// TravelMood component with all the logic for the travel mood selector
const TravelMood = () => {

  const {recommendations, selectedEmotion, selectedCategory, showCategories, showDestinations, 
    handleGetRecommendations, handleEmotionClick, handleCategoryClick, handleDestinationClick, handleBackClick} = useContext(Context)

  useEffect(() => {
    handleGetRecommendations();
  }, []);

  
  return (
    <div className="travel-mood">
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
        <>
        {/* <div className="travel-categories">
          {selectedEmotion.categories.map(category => (
            <div 
              key={category.name}
              className={`category ${selectedCategory.name === category.name ? 'selected' : ''}`} 
              onClick={() => handleCategoryClick(category)}
            >
              <img src={category.img} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div> */}
        <TravelCategories />
        </>
      )}
      {showDestinations && (
        <div className="destinations">
          {selectedCategory.destinations.map(destination => (
            <div 
              key={destination.name} 
              className="destination" 
              onClick={() => handleDestinationClick(destination)}
            >
              <img src={destination.img} alt={destination.name} />
              <p>{destination.name}</p>
              <div className="links">
                <a href="" target="_blank" rel="noopener noreferrer">Tips</a>
                <a href="" target="_blank" rel="noopener noreferrer">Flights</a>
                <a href="" target="_blank" rel="noopener noreferrer">Accommodation</a>
                <a href="" target="_blank" rel="noopener noreferrer">Guides</a>
                <a href="" target="_blank" rel="noopener noreferrer">Things to Do</a>
              </div>
            </div>
          ))}
        </div>
      )}
      {(showCategories || showDestinations) && (
        <button className="back-button" onClick={handleBackClick}>Go Back</button>
      )}
    </div>
  );
};

export default TravelMood;





