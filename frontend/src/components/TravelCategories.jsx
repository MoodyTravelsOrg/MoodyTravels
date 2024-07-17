import { useContext } from 'react';
import { Context } from '../context/Context.jsx';

function TravelCategories() {
    const { selectedEmotion, selectedCategory, handleCategoryClick } = useContext(Context);

  return (
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
  )
}

export default TravelCategories;