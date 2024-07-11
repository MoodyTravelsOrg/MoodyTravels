import User from "../models/User.js";
import createError from "http-errors";
import moment from "moment";

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

// Function to update mood:

export async function updateMood(req, res, next) {
  const { type } = req.body;

  if (!["happy", "sad", "angry", "anxious", "bored"].includes(type)) {
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

      moodToUpdate.type = type;

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

// Function to Delete Mood:
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
