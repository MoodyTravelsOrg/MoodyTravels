import React from "react";
import "./Carousel.css"; // ! This comp or rather it's styling is too complex to use tailwind, which is why I'm using external css for that.

// * This is the older "deity" version of the carousel:

// const Carousel = () => {
//   const images = [
//     "Anubis.jpeg",
//     "Ra.jpeg",
//     "Horus.jpeg",
//     "Seth.jpeg",
//     "Apis.jpeg",
//     "Hanuman.jpeg",
//     "Ganesha.jpeg",
//     "Garuda.jpeg",
//     "Quetzalcoatl.jpeg",
//     "Amaterasu.jpeg",
//   ];

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

//   ? Just a side note: I have a premium-account on FreePik and created all the images (and even the background) myself - using the AI tool. So, no need to worry about licensing issues. ;)

  return (
    <div className="carousel-container">
      <div className="banner">
        <div className="slider" style={{ "--quantity": images.length }}>
          {images.map((image, index) => (
            <div
              key={index}
              className="item"
              style={{ "--position": index + 1 }}
            >
              {/* The commented out stuff is the old "deity" text */}

              {/* <img src={`/images/${image}`} alt={`Entity ${index + 1}`} /> */}
              <img src={`/images/${image}`} alt={`Destination ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="content">

          {/* <h1 data-content="Your Spirit Companion">Your Spirit Companion</h1> */}
          <h1 data-content="Come on a trip with us">Come on a trip with us</h1>
          <div className="Info_about_Comp">
            {/* <h2>Pick one...</h2> */}
            <h2>Register...</h2>
            <p>
              {/* <b>and get a mighty companion</b> */}
              <b>and get a special feature!</b>
            </p>
            {/* <p>This is an exclusive feature for logged in users.</p> */}
            <p>"Which one?", you may ask... well, find out.</p>
          </div>
          <div className="model"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
