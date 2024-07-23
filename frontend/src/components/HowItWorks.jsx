import React from 'react';

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="how-it-works ml-60 mr-60 p-5 text-center bg-white/5 rounded-lg shadow-lg backdrop-blur-md border border-white/30 mt-16">
      <h2 className="text-4xl mb-4 text-white text-center">How It Works</h2>
      <div className="text-lg text-white">
        <p className="mb-4">
          MoodyTravels is designed to help you find the perfect travel destination based on your current mood. Here's how it works:
        </p>
        <ol className="list-decimal list-inside space-y-4">
            <br /><br />
          <li>
            <strong>Log Your Mood:</strong> Start by logging your current emotional state using our intuitive mood tracker.
          </li>
          <li>
            <strong>Get Personalized Recommendations:</strong> Based on your mood, our algorithm suggests travel destinations that align with your emotional needs.
          </li>
          <li>
            <strong>Explore Options:</strong> Browse through our curated list of destinations, each tailored to different emotional states.
          </li>
          <li>
            <strong>Plan Your Trip:</strong> Once you've found a destination that resonates with you, use our resources to plan your perfect mood-boosting getaway.
          </li>
          <li>
            <strong>Track Your Journey:</strong> Continue logging your moods before, during, and after your trip to see how travel impacts your emotional well-being.
          </li>
        </ol>
        <br /><br />
        <p className="mt-4">
          Remember, MoodyTravels is not just about finding a place to visit — it's about discovering destinations that can positively influence your emotional state and overall well-being.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;