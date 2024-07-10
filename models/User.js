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
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return validator.isStrongPassword(value);
      },
      message:
        "Password must contain at least 8 characters, including at least 1 lowercase character, 1 uppercase character, 1 number and 1 symbol",
    },
  },
  profileImage: {
    type: String,
    required: true,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/320px-User-avatar.svg.png", // this has to stay here, otherwise we get an error message if the user doesn't upload an image
  },

  moods: {
    type: [
      {
        type: {
          type: String,
          required: true,
          enum: ["happy", "sad", "angry", "anxious", "bored"],
        },
        createdAt: {
          type: Date,
          default: Date.now,
          required: true,
        },
        deletedAt: {
          type: Date,
          default: null,
        },
      },
    ],
    default: [],
  },
});

const User = model("User", userSchema);

export default User;
