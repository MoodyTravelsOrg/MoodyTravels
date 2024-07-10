import express from "express";
import { getUserData, addMood, deleteMood } from "../controllers/userController.js";
import authenticateToken from "../middlewares/authenticateToken.js"



const router = express.Router();

router.use(authenticateToken); 

router.get("/:id", getUserData)// right now we are not using this route, I created because we might need this route later.


// PATCH http://localhost:4000/users/:id/moods
router.patch("/:id/moods", addMood)

// DELETE http://localhost:4000/users/:id/:mood_id
router.delete("/:id/:mood_id", deleteMood) 


export default router;