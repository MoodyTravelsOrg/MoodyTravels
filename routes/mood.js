import express from "express";
import authenticateToken from "../middlewares/authenticateToken.js"
import { createMood, deleteMood } from "../controllers/moodController.js";


const router = express.Router();

router.use(authenticateToken);

// POST http://localhost:5000/moods

router.post("/", createMood)

router.delete("/:mood_id", deleteMood) // we will use this route later to delete our loged mood.





export default router;