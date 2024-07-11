import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TravelMood.css';

// TravelMood component with all the logic for the travel mood selector

const TravelMood = () => {
  const [data, setData] = useState([]);
  const [selectedEmotion, setSelectedEmotion] = useState({
    emotion: "",
    emoji: "",
    categories: []
  });
  const [selectedCategory, setSelectedCategory] = useState({});
  const [showCategories, setShowCategories] = useState(false);
  const [showDestinations, setShowDestinations] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    handleGetRecommendations();
  }, []);

  async function handleGetRecommendations() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/travel`);
      if (response.ok) {
        const recommendations = await response.json();
        setData(recommendations);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
    setShowCategories(true);
    setSelectedCategory('');
    setShowDestinations(false);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowDestinations(true);
  };

  const handleDestinationClick = (destination) => {
    navigate(`/destination/${destination.name}`, { state: { destination } });
  };

  const handleBackClick = () => {
    if (showDestinations) {
      setShowDestinations(false);
      setSelectedCategory('');
    } else if (showCategories) {
      setShowCategories(false);
      setSelectedEmotion('');
    }
  };

  return (
    <div className="travel-mood">
      {!showCategories && (
        <div className="emotions-input">
          <label className='travel-title' htmlFor="emotions">How are you feeling today?</label>
          <div className="emotions-buttons">
            {data.map(item => (
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
        <div className="travel-categories">
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
        </div>
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





