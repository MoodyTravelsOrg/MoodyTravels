import React from "react";
import "./Carousel.css"; // ! This comp or rather it's styling is too complex to use tailwind, which is why I'm using external css for that.

const Carousel = () => {
  const images = [
    "Anubis.jpeg",
    "Ra.jpeg",
    "Horus.jpeg",
    "Seth.jpeg",
    "Apis.jpeg",
    "Hanuman.jpeg",
    "Ganesha.jpeg",
    "Garuda.jpeg",
    "Quetzalcoatl.jpeg",
    "Amaterasu.jpeg",
  ];

//   ! Just a side note: I have a premium-account on FreePik and created all the images (and even the background) myself - using the AI tool. So, no need to worry about licensing issues. ;)

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
              <img src={`/images/${image}`} alt={`Entity ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="content">
          <h1 data-content="Your Spirit Companion">Your Spirit Companion</h1>
          <div className="Info_about_Comp">
            <h2>Pick one...</h2>
            <p>
              <b>and get a mighty companion</b>
            </p>
            <p>This is an exclusive benefit for logged in users.</p>
          </div>
          <div className="model"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
