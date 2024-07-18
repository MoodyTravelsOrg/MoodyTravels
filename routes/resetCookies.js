import express from "express";
import resetCookies from "../controllers/cookiesController.js";
const router = express.Router();

router.post("/", resetCookies);


export default router;