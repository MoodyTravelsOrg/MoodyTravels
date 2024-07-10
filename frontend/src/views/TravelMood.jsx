import React, { useEffect, useState } from 'react';
import './TravelMood.css';

// Temporary arrays of objets and data that we can use to build the TravelMood component 
/* const emotionsData = {
  happy: { emoji: '😊', categories: ['City', 'Beach', 'Mountain/Nature'] },
  sad: { emoji: '😢', categories: ['City', 'Beach', 'Mountain/Nature'] },
  angry: { emoji: '😡', categories: ['City', 'Beach', 'Mountain/Nature'] },
  anxious: { emoji: '😟', categories: ['City', 'Beach', 'Mountain/Nature'] }
};

const categoriesData = {
  happy: {
    City: {
      img: 'https://wallpapercave.com/wp/wp3594884.jpg',
      destinations: [
        { name: 'Happy City 1', img: 'https://via.placeholder.com/100x100.png?text=Happy+City+1' },
        { name: 'Happy City 2', img: 'https://via.placeholder.com/100x100.png?text=Happy+City+2' },
        { name: 'Happy City 3', img: 'https://via.placeholder.com/100x100.png?text=Happy+City+3' }
      ]
    },
    Beach: {
      img: 'https://th.bing.com/th/id/R.4e8d81070377c62b6f70f19f5dbd29dc?rik=NSSVLX43YmM7dA&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f07%2f4e8d81070377c62b6f70f19f5dbd29dc.jpg&ehk=zPd2CAORkHzF7J%2bglwU5cPkVXjoWrX4tVVKWPaE0z0c%3d&risl=1&pid=ImgRaw&r=0',
      destinations: [
        { name: 'Happy Beach 1', img: 'https://via.placeholder.com/100x100.png?text=Happy+Beach+1' },
        { name: 'Happy Beach 2', img: 'https://via.placeholder.com/100x100.png?text=Happy+Beach+2' },
        { name: 'Happy Beach 3', img: 'https://via.placeholder.com/100x100.png?text=Happy+Beach+3' }
      ]
    },
    'Mountain/Nature': {
      img: 'https://th.bing.com/th/id/OIP.xHAa7hfT7gXHVAVusTytogHaD-?rs=1&pid=ImgDetMain',
      destinations: [
        { name: 'Happy Mountain 1', img: 'https://via.placeholder.com/100x100.png?text=Happy+Mountain+1' },
        { name: 'Happy Mountain 2', img: 'https://via.placeholder.com/100x100.png?text=Happy+Mountain+2' },
        { name: 'Happy Mountain 3', img: 'https://via.placeholder.com/100x100.png?text=Happy+Mountain+3' }
      ]
    }
  },
  sad: {
    City: {
      img: 'https://wallpapercave.com/wp/wp3594884.jpg',
      destinations: [
        { name: 'Sad City 1', img: 'https://via.placeholder.com/100x100.png?text=Sad+City+1' },
        { name: 'Sad City 2', img: 'https://via.placeholder.com/100x100.png?text=Sad+City+2' },
        { name: 'Sad City 3', img: 'https://via.placeholder.com/100x100.png?text=Sad+City+3' }
      ]
    },
    Beach: {
      img: 'https://via.placeholder.com/200x200.png?text=Sad+Beach',
      destinations: [
        { name: 'Sad Beach 1', img: 'https://via.placeholder.com/100x100.png?text=Sad+Beach+1' },
        { name: 'Sad Beach 2', img: 'https://via.placeholder.com/100x100.png?text=Sad+Beach+2' },
        { name: 'Sad Beach 3', img: 'https://via.placeholder.com/100x100.png?text=Sad+Beach+3' }
      ]
    },
    'Mountain/Nature': {
      img: 'https://via.placeholder.com/200x200.png?text=Sad+Mountain',
      destinations: [
        { name: 'Sad Mountain 1', img: 'https://via.placeholder.com/100x100.png?text=Sad+Mountain+1' },
        { name: 'Sad Mountain 2', img: 'https://via.placeholder.com/100x100.png?text=Sad+Mountain+2' },
        { name: 'Sad Mountain 3', img: 'https://via.placeholder.com/100x100.png?text=Sad+Mountain+3' }
      ]
    }
  },
  angry: {
    City: {
      img: 'https://wallpapercave.com/wp/wp3594884.jpg',
      destinations: [
        { name: 'Angry City 1', img: 'https://via.placeholder.com/100x100.png?text=Angry+City+1' },
        { name: 'Angry City 2', img: 'https://via.placeholder.com/100x100.png?text=Angry+City+2' },
        { name: 'Angry City 3', img: 'https://via.placeholder.com/100x100.png?text=Angry+City+3' }
      ]
    },
    Beach: {
      img: 'https://via.placeholder.com/200x200.png?text=Angry+Beach',
      destinations: [
        { name: 'Angry Beach 1', img: 'https://via.placeholder.com/100x100.png?text=Angry+Beach+1' },
        { name: 'Angry Beach 2', img: 'https://via.placeholder.com/100x100.png?text=Angry+Beach+2' },
        { name: 'Angry Beach 3', img: 'https://via.placeholder.com/100x100.png?text=Angry+Beach+3' }
      ]
    },
    'Mountain/Nature': {
      img: 'https://via.placeholder.com/200x200.png?text=Angry+Mountain',
      destinations: [
        { name: 'Angry Mountain 1', img: 'https://via.placeholder.com/100x100.png?text=Angry+Mountain+1' },
        { name: 'Angry Mountain 2', img: 'https://via.placeholder.com/100x100.png?text=Angry+Mountain+2' },
        { name: 'Angry Mountain 3', img: 'https://via.placeholder.com/100x100.png?text=Angry+Mountain+3' }
      ]
    }
  },
  anxious: {
    City: {
      img: 'https://via.placeholder.com/200x200.png?text=Anxious+City',
      destinations: [
        { name: 'Anxious City 1', img: 'https://via.placeholder.com/100x100.png?text=Anxious+City+1' },
        { name: 'Anxious City 2', img: 'https://via.placeholder.com/100x100.png?text=Anxious+City+2' },
        { name: 'Anxious City 3', img: 'https://via.placeholder.com/100x100.png?text=Anxious+City+3' }
      ]
    },
    Beach: {
      img: 'https://via.placeholder.com/200x200.png?text=Anxious+Beach',
      destinations: [
        { name: 'Anxious Beach 1', img: 'https://via.placeholder.com/100x100.png?text=Anxious+Beach+1' },
        { name: 'Anxious Beach 2', img: 'https://via.placeholder.com/100x100.png?text=Anxious+Beach+2' },
        { name: 'Anxious Beach 3', img: 'https://via.placeholder.com/100x100.png?text=Anxious+Beach+3' }
      ]
    },
    'Mountain/Nature': {
      img: 'https://via.placeholder.com/200x200.png?text=Anxious+Mountain',
      destinations: [
        { name: 'Anxious Mountain 1', img: 'https://via.placeholder.com/100x100.png?text=Anxious+Mountain+1' },
        { name: 'Anxious Mountain 2', img: 'https://via.placeholder.com/100x100.png?text=Anxious+Mountain+2' },
        { name: 'Anxious Mountain 3', img: 'https://via.placeholder.com/100x100.png?text=Anxious+Mountain+3' }
      ]
    }
  }
}; */

// TravelMood component with all the logic for the travel mood selector

const TravelMood = () => {
  const [data, setData] = ([]);
  const [selectedEmotion, setSelectedEmotion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [showDestinations, setShowDestinations] = useState(false);

  useEffect(() => {
    handleGetRecommendations();
  }, []);

  async function handleGetRecommendations() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/travel`);
      console.log(response);

      if (response.ok) {
        const recommendations = await response.json();

        setData(recommendations);
        console.log(data);
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
    <>
    <div className="travel-mood">
      {!showCategories && (
        <div className="emotions-input">
          <label className='travel-title' htmlFor="emotions">How are you feeling today?</label>
          <div className="emotions-buttons">
            {data.map(item => (
              <button 
                key={item.emotion} 
                className={`emotion-button ${selectedEmotion === item.emotion ? 'selected' : ''}`} 
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
              key={category}
              className={`category ${selectedCategory === category ? 'selected' : ''}`} 
              onClick={() => handleCategoryClick(category)}
            >
              <img src={category.img} alt={category} />
              <p>{category}</p>
            </div>
          ))}
        </div>
      )}
      {showDestinations && (
        <div className="destinations">
          {selectedEmotion[selectedCategory].destinations.map(destination => (
            <div key={destination.name} className="destination">
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
    {/* <div className="travel-mood">
      {!showCategories && (
        <div className="emotions-input">
          <label className='travel-title' htmlFor="emotions">How are you feeling today?</label>
          <div className="emotions-buttons">
            {Object.keys(emotionsData).map(emotion => (
              <button 
                key={emotion} 
                className={`emotion-button ${selectedEmotion === emotion ? 'selected' : ''}`} 
                onClick={() => handleEmotionClick(emotion)}
              >
                <span className="emoji">{emotionsData[emotion].emoji}</span>
                {emotion}
              </button>
            ))}
          </div>
        </div>
      )}
      {showCategories && !showDestinations && (
        <div className="travel-categories">
          {emotionsData[selectedEmotion].categories.map(category => (
            <div 
              key={category}
              className={`category ${selectedCategory === category ? 'selected' : ''}`} 
              onClick={() => handleCategoryClick(category)}
            >
              <img src={categoriesData[selectedEmotion][category].img} alt={category} />
              <p>{category}</p>
            </div>
          ))}
        </div>
      )}
      {showDestinations && (
        <div className="destinations">
          {categoriesData[selectedEmotion][selectedCategory].destinations.map(destination => (
            <div key={destination.name} className="destination">
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
    </div> */}
    </>
  );
};

export default TravelMood;




