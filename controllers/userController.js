import User from "../models/User.js";
import createError from "http-errors";
import moment from "moment";
import validator from "validator";
import { hash } from "bcrypt";


// function to send users Data to frontend:
export async function getUserData(req, res, next) {
  let foundUser;

  try {
    foundUser = await User.findById(req.params.id);
  } catch {
    return next(createError(500, "An unexpected error occurred. Please try again later!"));
  }

  if (foundUser) {
    try {
      res.status(201).json({
        id: foundUser.id,
        email: foundUser.email,
        username: foundUser.username,
        profileImage: foundUser.profileImage,
        moods: foundUser.moods.filter(mood => mood.deletedAt === null)
      });
    } catch {
      next(createError(500, "An unexpected error occurred. Please try again later!"));
    }
  } else {
    next(createError(404, "User not found"));
  }
}

// function to update user data
export async function updateUserData(req, res, next) {
  const { username, password } = req.body;

  // if there is a password, check if new password is strong
  if (password && !validator.isStrongPassword(password)) {
    return next(createError(400, "Password must contain at least 8 characters, including at least 1 lowercase character, 1 uppercase character, 1 number and 1 symbol"));
  }
  // if there is a password, hash the password
  let hashedPassword;
  if (password) {
    hashedPassword = await hash(password, 10);
  }

  let foundUser;

  try {
    foundUser = await User.findById(req.params.id);
  } catch (error) {
    return next(createError(500, "Server error"));
  }

  if (foundUser) {
    try {
      let updatedUser;

      if (username) {
        updatedUser = await User.findByIdAndUpdate(
          req.params.id, // id
          {$set: {username: username}}, // update
          {new: true} // options
        );
      }

      if (password) {
        updatedUser = await User.findByIdAndUpdate(
          req.params.id, // id
          {$set: {password: hashedPassword}}, // update
          {new: true} // options
        );
      }

      if (req.file) {
        updatedUser = await User.findByIdAndUpdate(
          req.params.id, // id
          {$set: {profileImage: req.file.filename}}, // update
          {new: true} // options
        );
      }
      
      await updatedUser.save();
  
      res.status(201).json(updatedUser);
    } catch (error) {
      next(createError(500, "Server error"));
    }
    
  } else {
    next(createError(404, "User not found"));
  }
}

// function to hard delet user account
export async function deleteUser(req, res, next) {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (deletedUser) {
      res.json({
        message: "Account deleted successfully"
      })
    } else {
      next(createError(404, "User not found"));
    }
  } catch (error) {
    return next(createError(500, "Server error"));
  }
}

// Function to log/add mood:
export async function addMood(req, res, next) {
  const { selectedMood } = req.body;

  if (!["happy", "sad", "angry", "anxious", "bored"].includes(selectedMood)) {
    return next(createError(400, "Invalid mood type!"))
  }

  let foundUser;

  try {
    foundUser = await User.findById(req.params.id);
  } catch {
    return next(
      createError(500, "An unexpected error occurred. Please try again later!")
    );
  }

  console.log(foundUser);

  if (foundUser) {
    const today = moment().startOf("day");

    const moodExistsToday = foundUser.moods.some((mood) => {
      return (
        moment(mood.createdAt).isSame(today, "day") && mood.deletedAt === null
      );
    });

    if (moodExistsToday) {
      return next(createError(400, "You have already logged a mood today."));
    }

    try {
      const newMood = {
        type: selectedMood,
      };
      
      foundUser.moods.push(newMood);

      await foundUser.save();

      res.status(201).json({
        moods: foundUser.moods.filter((mood) => mood.deletedAt === null),
      });
    } catch {
      next(
        createError(
          500,
          "An unexpected error occurred. Please try again later!"
        )
      );
    }
  } else {
    next(createError(404, "User not found"));
  }
}


// Function to replace a mood:
export async function updateMood(req, res, next) {
  const { selectedMood } = req.body;

  if (!["happy", "sad", "angry", "anxious", "bored"].includes(selectedMood)) {
    return next(createError(400, "Invalid mood type!"))
  }
  let foundUser;
  try {
    foundUser = await User.findById(req.params.id);
  } catch {
    return next(
      createError(500, "An unexpected error occurred. Please try again later!")
    );
  }
  if (foundUser) {
    try {
      const moodToUpdate = foundUser.moods.id(req.params.mood_id);

      if (!moodToUpdate) {
        return next(createError(404, "Mood not found"));
      }
      moodToUpdate.type = selectedMood;
      await foundUser.save();
      res.status(201).json({
        moods: foundUser.moods.filter((mood) => mood.deletedAt === null),
      });
    } catch {
      next(
        createError(
          500,
          "An unexpected error occurred. Please try again later!"
        )
      );
    }
  } else {
    next(createError(404, "User not found"));
  }
}

// Function to Delete a mood:
export async function deleteMood(req, res, next) {
  let foundUser;

  try {
    foundUser = await User.findById(req.params.id);
  } catch {
    return next(
      createError(500, "An unexpected error occurred. Please try again later!")
    );
  }
  if (foundUser) {
    try {
      const moodToDelete = foundUser.moods.id(req.params.mood_id);
      console.log(moodToDelete);
      if (!moodToDelete) {
        return next(createError(404, "Mood not found"));
      }
      moodToDelete.deletedAt = new Date();
      await foundUser.save();
      res.status(201).json({
        moods: foundUser.moods.filter((mood) => mood.deletedAt === null),
      });    
    } catch {
      next(
        createError(
          500,
          "An unexpected error occurred. Please try again later!"
        )
      );
    }
  } else {
    next(createError(404, "User not found"));
  }
}
