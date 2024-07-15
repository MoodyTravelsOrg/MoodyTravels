import React from 'react';
import { useLocation } from 'react-router-dom';
import './DestinationView.css';

const DestinationDetail = () => {

  const location = useLocation();
  const { destination } = location.state;

  return (
    <div className="destination-detail">
      <h1>{destination.name}</h1>
      <img src={destination.img} alt={destination.name} />
      <div className="details">
        <p>Here are some details about {destination.name}.</p>
        <div className="links">
          <a href="" target="_blank" rel="noopener noreferrer">Tips</a>
          <a href="" target="_blank" rel="noopener noreferrer">Flights</a>
          <a href="" target="_blank" rel="noopener noreferrer">Accommodation</a>
          <a href="" target="_blank" rel="noopener noreferrer">Guides</a>
          <a href="" target="_blank" rel="noopener noreferrer">Things to Do</a>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
