import mongoose, { Schema, model } from "mongoose";
import validator from "validator";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: "Please enter a valid email address!",
    },
  },

  username: {
    type: String,
    minLength: [5, "Username must be at least 5 characters long!"],
    required: true,
    validate: {
      validator: function (value) {
        return value.charAt(0) === value.charAt(0).toUpperCase();
      },
      message: "Username must start with an uppercase letter!",
    },
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password must be at least 8 characters long!"],
  },
  profileImage: {
    type: String,
    required: true,
    default: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/320px-User-avatar.svg.png"
  },

/*   recommendations: {
    type: [
      {
        type: mongoose.ObjectId,
        required: true,
        ref: "Recommendations",
      },
    ],
    required: true,
    default: [],
  }, */

  // in the Recommendation or Moods model we will have five different recommendations for each mood; our Recommendation model will look like:

  /*  const recommendations = new Schema({
    mood: { type: String, required: true },
    recommendation: { type: [String], required: true },
  });
  
  const Recommendation = model("Recommendation", userSchema);
   */

  //while seeding our database; we will insert five recommendations for each individual mood; something like:

  /* const seedRecommendations = async () => {
    const recommendations = [
      {
        mood: 'happy',
        recommendation: [
          'Watch a comedy movie',
          'Go for a walk in the park',
          'Listen to upbeat music',
          'Spend time with friends and family',
          'Treat yourself to your favorite dessert',
        ],
      },
      {
        mood: 'sad',
        recommendation: [
          'Talk to a friend or family member',
          'Write down your feelings in a journal',
          'Watch a feel-good movie',
          'Listen to soothing music',
          'Engage in a creative activity like painting or drawing',
        ],
      },
      {
        mood: 'angry',
        recommendation: [
          'Practice deep breathing exercises',
          'Go for a run or do a workout',
          'Listen to calming music',
          'Take a break and spend time in nature',
          'Try a relaxation technique like meditation or yoga',
        ],
      },
      {
        mood: 'anxious',
        recommendation: [
          'Practice mindfulness or meditation',
          'Write down what’s making you anxious',
          'Do a physical activity like yoga or stretching',
          'Listen to calming music or nature sounds',
          'Spend time with a pet',
        ],
      },
      {
        mood: 'bored',
        recommendation: [
          'Read a new book',
          'Try cooking a new recipe',
          'Start a new hobby like knitting or drawing',
          'Explore a new place in your city',
          'Watch a documentary on a topic you’re interested in',
        ],
      },
    ];
  
    try {
      await Recommendations.deleteMany({});
  
      await Recommendations.insertMany(recommendations);
  
      console.log('Database seeded successfully!');
    } catch (error) {
      console.error('Error seeding database:', error);
    } 
  }; */
  //? so we must talk with Jamie or Shinhee on how to ref to the nested object; while we are only picking only one of the five recommendations randomly from the recommendation property of the Recommendation model?
});

const User = model("User", userSchema);

export default User;
