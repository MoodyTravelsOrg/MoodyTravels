import { useContext } from 'react';
import { Context } from '../context/Context.jsx';

function TravelDestinations() {
    const { selectedCategory, handleDestinationClick, handleBackClick } = useContext(Context);

  return (
    <>
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
    <button className="back-button" onClick={handleBackClick}>Go Back</button>
    </> 
  )
}

export default TravelDestinations;