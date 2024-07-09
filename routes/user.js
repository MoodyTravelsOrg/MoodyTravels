import express from "express";
import { getUserData, addMood } from "../controllers/userController.js";
import authenticateToken from "../middlewares/authenticateToken.js"



const router = express.Router();

router.use(authenticateToken);

router.get("/:id", getUserData)// right now we are not using this route, I created because we might need this route later.


// PATCH http://localhost:5000/users/:id/moods
router.patch("/:id/moods", addMood)


export default router;