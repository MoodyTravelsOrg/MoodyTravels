import React from "react";

const HowItWorks = () => {
  return (
    <div
      id="how-it-works"
      className="flex justify-center items-center min-h-screen pt-16 px-4"
    >
      <div className="w-full max-w-6xl bg-darkGreenForBG rounded-lg shadow-xl overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl">
        <div className="relative p-12">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h2 className="text-5xl font-bold text-white mb-6 text-center group-hover:text-yellowishGreenForTextandButtons transition-colors duration-300">
              How It Works
            </h2>
            <div className="space-y-8 text-white text-lg group-hover:text-gray-100 transition-colors duration-300">
              <p>
                MoodVentures is designed to help you find the perfect travel
                destination based on your current mood. Here's how it works:
              </p>
              <ol className="list-decimal list-inside space-y-6 group-hover:text-white transition-colors duration-300">
                <li>
                  <strong className="text-yellowishGreenForTextandButtons">
                    Log Your Mood:
                  </strong>{" "}
                  Start by logging your current emotional state using our
                  intuitive mood tracker.
                </li>
                <li>
                  <strong className="text-yellowishGreenForTextandButtons">
                    Get Personalized Recommendations:
                  </strong>{" "}
                  Based on your mood, our algorithm suggests travel destinations
                  that align with your emotional needs.
                </li>
                <li>
                  <strong className="text-yellowishGreenForTextandButtons">
                    Explore Options:
                  </strong>{" "}
                  Browse through our curated list of destinations, each tailored
                  to different emotional states.
                </li>
                <li>
                  <strong className="text-yellowishGreenForTextandButtons">
                    Plan Your Trip:
                  </strong>{" "}
                  Once you've found a destination that resonates with you, use
                  our resources to plan your perfect mood-boosting getaway.
                </li>
                <li>
                  <strong className="text-yellowishGreenForTextandButtons">
                    Track Your Journey:
                  </strong>{" "}
                  Continue logging your moods before, during, and after your
                  trip to see how travel impacts your emotional well-being.
                </li>
              </ol>
              <p className="font-semibold text-yellowishGreenForTextandButtons tracking-wide group-hover:text-white transition-colors duration-300">
                Remember, MoodVentures is not just about finding a place to
                visit — it's about discovering destinations that can positively
                influence your emotional state and overall well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
