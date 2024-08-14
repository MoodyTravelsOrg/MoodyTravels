import React, { useEffect, useState } from "react";

const OurMission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay before starting the animations

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="our-mission" className="flex justify-center items-center py-12 px-4 bg-darkGreenForBG/30 backdrop-blur">
      <div className="w-full max-w-4xl p-8 md:p-12">
        {/* tittle appears from the top  */}
        <h2
          className={`text-2xl md:text-4xl font-bold drop-shadow-lg text-yellowishGreenForTextandButtons mb-6 text-center transition-transform duration-1000 ease-out ${
            isVisible ? "transform translate-y-0 opacity-100" : "transform -translate-y-10 opacity-0"
          }`}
        >
          Your Journey to Emotional Well-Being Begins Here
        </h2>
        {/* description appears from the left */}
        <div className="text-white text-lg md:text-xl space-y-6 leading-relaxed">
          <p
            className={`transition-transform duration-1000 ease-out ${
              isVisible ? "transform translate-x-0 opacity-100" : "transform -translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            MoodVentures is designed to balance your mental health with everyday life by combining mood tracking with personalized travel recommendations.
          </p>
          <p
            className={`transition-transform duration-1000 ease-out ${
              isVisible ? "transform translate-x-0 opacity-100" : "transform translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "1s" }}
          >
            Your mood shapes your travel experiences. By logging your emotions and recognizing your mood patterns, we suggest destinations that resonate with your current needs.
          </p>
          <p
            className={`transition-transform duration-1000 ease-out ${
              isVisible ? "transform translate-x-0 opacity-100" : "transform -translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "1.5s" }}
          >
            Whether you're seeking adventure, serenity, or a joyful escape, MoodVentures guides you to the perfect destination, accessible from any device.
          </p>
          <p
            className={`transition-transform duration-1000 ease-out ${
              isVisible ? "transform translate-x-0 opacity-100" : "transform translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "2s" }}
          >
            Our mission is to help you embrace your emotions and find travel experiences that elevate your well-being. Join us and start exploring the world with MoodVentures today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;


