import React, { useContext, useEffect, useState } from "react";
import "./HeroSection.css";
import { Context } from '../context/Context.jsx';

const Carousel = () => {
  const images = [
    "DestinationImagesForCarousel/Hawaii_Beach.jpg",
    "DestinationImagesForCarousel/Paris_Eiffel-Tower.jpg",
    "DestinationImagesForCarousel/Sydney_Opera-House.jpg",
    "DestinationImagesForCarousel/New-York_Statue-of-Liberty.jpg",
    "DestinationImagesForCarousel/Tokyo_THE-castle.jpg",
    "DestinationImagesForCarousel/Rome_Colosseum.jpg",
    "DestinationImagesForCarousel/Morocco_ Sahara.jpg",
    "DestinationImagesForCarousel/Himalayas_Mount-Everest.jpg",
    "DestinationImagesForCarousel/Antarctica_Iceberg.jpg",
    "DestinationImagesForCarousel/Norway_Lysefjord.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { navigate } = useContext(Context);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-800">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={`/images/${image}`}
            alt={`Destination ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6 md:space-y-10 px-4 text-center">
        <h1 className="font-bold text-white animate-slide-in text-4xl sm:text-5xl md:text-8xl lg:text-9xl xl:text-10xl drop-shadow-lg leading-tight">
          Welcome to <span className="text-yellowishGreenForTextandButtons">MoodVentures</span>
        </h1>
        <h1 className="font-bold text-white animate-slide-in text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg leading-tight">
          Come on a trip with us!
        </h1>
        <button
          onClick={() => navigate("/travel-mood")}
          className="mt-6 md:mt-10 bg-yellowishGreenForTextandButtons hover:bg-white text-darkGreenForText font-semibold py-4 sm:py-5 px-10 sm:px-12 rounded-full shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 text-lg sm:text-xl md:text-2xl lg:text-3xl"
        >
        Start your adventure
        </button>
      </div>
    </div>
  );
};

export default Carousel;





