import { useContext } from 'react';
import { Context } from '../context/Context.jsx';
import './TravelMood/TravelMood.css';

function TravelCategories() {
    const { selectedEmotion, selectedCategory, setSelectedCategory, handleCategoryClick } = useContext(Context);

  return (
    <div className="travel-categories">
        <h2>Do you prefer to travel to a city, 
        beach or into nature?</h2>
        <div className='categories-wrapper'>
          {selectedEmotion.categories.map(category => (
              <div
                key={category.name}
                className={`category ${selectedCategory.name === category.name ? 'selected' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                <img src={category.img} alt={category.name} />
                <p>{category.name}</p>
              </div>
          ))}
        </div>
        <button onClick={() => handleCategoryClick()}>get travel recommendations</button>
    </div>
  )
}

export default TravelCategories;