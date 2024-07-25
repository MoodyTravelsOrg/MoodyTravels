import React from "react";

const OurMission = () => {
  return (
    <div
      id="our-mission"
      className="flex justify-center items-center min-h-screen pt-16 px-4"
    >
      <div className="w-full max-w-6xl bg-darkGreenForBG rounded-lg shadow-xl overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl">
        <div className="relative p-12">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-white mb-6 text-center group-hover:text-yellowishGreenForTextandButtons transition-colors duration-300">
              Welcome to MoodVentures
            </h1>
            <h2 className="text-3xl font-semibold text-yellowishGreenForTextandButtons mb-10 text-center group-hover:text-white transition-colors duration-300">
              Where your journey to emotional well-being begins
            </h2>
            <div className="space-y-8 text-white text-lg group-hover:text-gray-100 transition-colors duration-300">
              <p>
                Balancing mental health with everyday life can be challenging,
                which is why we created MoodVentures – a unique web application
                that combines mood tracking with personalized travel
                recommendations to enhance your emotional state.
              </p>
              <p>
                At MoodVentures, we know your mood influences your travel
                experiences. By logging your emotions and understanding your
                mood patterns, we suggest destinations and activities that align
                with your current needs. Whether you're feeling adventurous,
                serene, or in need of a joyful escape, MoodVentures is here to
                guide you.
              </p>
              <p>
                Our responsive interface ensures you can access MoodVentures on
                any device, making it easy to plan your next uplifting journey
                from anywhere. Explore our interactive mood elements – and
                discover travel suggestions designed to elevate your well-being.
                Bad days are part of life, but they don't have to define it.
                With MoodVentures, turn challenging moments into opportunities
                for growth and discovery. Our curated travel recommendations
                lift your spirits and help you reconnect with happiness.
              </p>
              <p>
                Feeling joyful? Let us guide you to vibrant destinations filled
                with positive vibes. Seeking peace? Let's take you on a serene
                journey to calming landscapes.
              </p>
              <p>
                MoodVentures is your companion on the path to emotional
                well-being. Our mission is to help you embrace your emotions and
                find perfect travel experiences to match. By integrating mood
                tracking with personalized recommendations, we create a holistic
                approach to mental health and travel.
              </p>
              <p>
                Join our community of travel enthusiasts and mental health
                advocates. Share your journey, discover new destinations, and
                connect with others on the path to well-being.
              </p>
              <p className="font-extrabold text-yellowishGreenForTextandButtons tracking-wide group-hover:text-white transition-colors duration-300">
                Start your journey with MoodVentures today and discover how the
                right travel experience can make all the difference. Let's
                explore the world together, one mood at a time. Welcome to a new
                way of traveling. Welcome to MoodVentures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
