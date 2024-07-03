import express from "express";
import checkValues from "../validation/checkValue.js";
import loginController from "../controllers/loginController.js";

const router = express.Router();

router.post("/", checkValues(["username", "password"]), loginController);

export default router;
