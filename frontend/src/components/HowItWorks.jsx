import React, { useEffect, useState } from "react";

const HowItWorks = () => {
  const [showContent, setShowContent] = useState(false);
  const [listItemVisible, setListItemVisible] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    // controls the order of the of list items
    const listItems = [
      "Log Your Mood: Start by logging your current emotional state using our intuitive mood tracker.",
      "Get Personalized Recommendations: Based on your mood, our algorithm suggests travel destinations that align with your emotional needs.",
      "Explore Options: Browse through our curated list of destinations, each tailored to different emotional states.",
      "Plan Your Trip: Once you've found a destination that resonates with you, use our resources to plan your perfect mood-boosting getaway.",
      "Track Your Journey: Continue logging your moods before, during, and after your trip to see how travel impacts your emotional well-being."
    ];

    listItems.forEach((_, index) => {
      setTimeout(() => {
        setListItemVisible(prev => [...prev, index]);
      }, 1800 * (index + 1)); // 2 seconds after the previous item
    });

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      id="how-it-works"
      className="flex flex-col justify-center items-center w-full min-h-screen pt-12 px-4 bg-darkGreenForBG/20 backdrop-blur-md transition-all duration-500 ease-in-out"
    >
      <div className="w-full max-w-7xl rounded-lg  overflow-hidden group transition-all duration-300 ease-in-out ">
        <div className="relative p-6 sm:p-12 flex flex-col md:flex-row justify-between items-start">
          <div className="absolute inset-0 bg-black opacity-0  transition-opacity duration-300"></div>
          
          {/* Left Section: Title and Paragraph with Enhanced Shadow and Font */}
          <div className={`relative z-10 w-full md:w-1/2 pr-6 mb-8 md:mb-0 transform transition-transform duration-1000 ease-in-out ${showContent ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 sm:mb-6 text-left transition-colors duration-300 drop-shadow-lg">
              How It Works
            </h2>
            <div className="space-y-4 sm:space-y-8 text-white text-lg sm:text-xl lg:text-2xl drop-shadow-lg">
              <p>
                MoodVentures is designed to help you find the perfect travel
                destination based on your current mood. Here's how it works:
              </p>
            </div>
          </div>
          
          {/* Right Section: Ordered List with Sequential Appearance */}
          <div className="relative z-10 w-full md:w-1/2 pl-6">
            <ol className="list-decimal list-inside space-y-4 sm:space-y-6 text-white text-lg sm:text-xl lg:text-xl transition-colors duration-300">
              {[
                "Log Your Mood: Start by logging your current emotional state using our intuitive mood tracker.",
                "Get Personalized Recommendations: Based on your mood, our algorithm suggests travel destinations that align with your emotional needs.",
                "Explore Options: Browse through our curated list of destinations, each tailored to different emotional states.",
                "Plan Your Trip: Once you've found a destination that resonates with you, use our resources to plan your perfect mood-boosting getaway.",
                "Track Your Journey: Continue logging your moods before, during, and after your trip to see how travel impacts your emotional well-being."
              ].map((text, index) => (
                <li
                  key={index}
                  className={`transform transition-opacity duration-1000 ease-in-out ${
                    listItemVisible.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                >
                  <strong className="text-yellowishGreenForTextandButtons">
                    {text.split(":")[0]}:
                  </strong>{" "}
                  {text.split(":")[1]}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Final Paragraph Centered Below the Columns */}
        <div className={`relative z-10 text-center mt-8 transform transition-transform duration-1000 ease-in-out ${showContent ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <p className="font-semibold text-yellowishGreenForTextandButtons text-pretty tracking-wide text-lg sm:text-xl lg:text-2xl drop-shadow-lg  transition-colors duration-300">
            Remember, MoodVentures is not just about finding a place to visit, it's about discovering destinations that can positively influence your emotional state and overall well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
