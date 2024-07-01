import express from "express";
import authenticateToken from "../middlewares/authenticateToken.js";
import { refreshTokens } from "../controllers/refreshTokenController.js";


const router = express.Router();

// use authentication middleware to protect the /refresh-token route
router.use(authenticateToken);

router.get("/", refreshTokens);

export default router;