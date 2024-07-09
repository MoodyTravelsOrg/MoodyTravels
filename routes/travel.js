import express from "express";
import { getDestination } from "../controllers/travelController";

const router = express.Router();

router.get("/:destination", getDestination);

export default router;