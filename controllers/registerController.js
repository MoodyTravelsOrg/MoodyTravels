import User from "../models/User.js";
import createError from "http-errors";
import { hash } from "bcrypt";
import jwt from "jsonwebtoken";

async function registerController(req, res, next) {
  const { email, username, password } = req.body;

  const profileImage = req.file ? req.file.filename : "";
  try {
    const foundUser = await User.findOne({ $or: [{ email }, { username }] });

    if (foundUser) {
      if (foundUser.email === email) {
        return next(createError(409,"The email address you entered is already registered, Please try a different email address"));
      }
      if (foundUser.username === username) {
        return next(createError(409,"Sorry, this username is already in use, Please try a different username"));
      }
    };

    const hashedPassword = await hash(password, 10);

    const newUser = await User.create({
      email,
      username,
      password: hashedPassword,
      profileImage: profileImage,
    });

    const accessToken = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {expiresIn: "20m"});
    const refreshToken = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {expiresIn: "1d"});

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    };

    const accessOptions = {
      ...cookieOptions,
      maxAge: 1000 * 60 * 20,
    };

    const refreshOptions = {
      ...cookieOptions,
      maxAge: 1000 * 60 * 60 * 24,
      path: "/refresh",
    };

    res.cookie("accessCookie", accessToken, accessOptions);
    res.cookie("refreshCookie", refreshToken, refreshOptions);

    res.status(201).json({
      id: newUser.id,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const errMsg = Object.values(err.errors)[0].message;
      return next(createError(400, errMsg));
    }
    next(
      createError(500, "Registration could not be completed. Please try again")
    );
  }
}

export default registerController;
