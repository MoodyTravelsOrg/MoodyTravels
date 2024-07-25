import express from "express";
import { getUserData, updateUserData, deleteUser, addMood, updateMood, deleteMood,  } from "../controllers/userController.js";
import authenticateToken from "../middlewares/authenticateToken.js"
import upload from "../middlewares/multer.js";



const router = express.Router();

router.use(authenticateToken);


// GET http://localhost:4000/users/:id
router.get("/:id", getUserData);

// PATCH http://localhost:4000/users/:id
router.patch("/:id", upload.single("profileImage"), updateUserData);

// DELETE http://localhost:4000/users/:id
router.delete("/:id", deleteUser);

// PATCH http://localhost:4000/users/:id/moods
router.patch("/:id/moods", addMood);

// PATCH http://localhost:4000/users/:id/moods/:mood_id
router.patch("/:id/moods/:mood_id", updateMood); 

// DELETE http://localhost:4000/users/:id/moods/:mood_id
router.delete("/:id/moods/:mood_id", deleteMood); 


export default router;