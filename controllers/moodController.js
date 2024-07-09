import Mood from "../models/Mood.js";
import createError from "http-errors";

export async function createMood(req, res, next) {
  const { mood } = req.body;

  try {
    const newMood = await Mood.create({ mood });
    res.status(201).json({
      id: newMood._id,
    });
  } catch {
    next(createError(500, "Mood could not be added. Please try again"));
  }
}




export async function deleteMood(req, res, next) {
  // function to delete a mood document from Mood collection, we will use this later
}
