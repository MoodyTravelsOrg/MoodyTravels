import express from "express";
import { /* getDestination, */ getRecommendations } from "../controllers/travelController.js";

const router = express.Router();

router.get("/", getRecommendations);

/* router.get("/:destination", getDestination); */ // if we work with an api

export default router;