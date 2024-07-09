import User from "../models/User.js";
import createError from "http-errors";

export async function getUserData(req, res, next) {
  // right now we don't need this function!!
}

export async function addMood(req, res, next) {
  const { moodId } = req.body;

  let foundUser;

  try {
    foundUser = await User.findById(req.params.id);
  } catch {
    return next(createError(500, "Server error"));
  }

  if (foundUser) {
    try {
      const options = {
        new: true,
      };
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $push: { moods: moodId } },
        options
      );
      updatedUser.populate("moods");

      res.status(201).json({
        id: updatedUser.id,
        username: updatedUser.username,
        profileImage: updatedUser.profileImage,
        moods: updatedUser.moods.filter((mood) => mood.deletedAt === null),
      });
    } catch {
      next(createError(500, "Server error"));
    }
  } else {
    next(createError(404, "User not found"));
  }
}
