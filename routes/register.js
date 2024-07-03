import express from "express";
import checkValues from "../validation/checkValue.js";
import registerController from "../controllers/registerController.js";
import upload from "../middlewares/multer.js";
import verifyReCaptcha from "../middlewares/reCaptcha.js";

const router = express.Router()

router.post("/", checkValues(["email", "password", "username"]), upload.single("profileImage"), verifyReCaptcha, registerController)

export default router;