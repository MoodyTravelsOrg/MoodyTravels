import User from "../models/User.js";
import createError from "http-errors";
import { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";


async function registerController(req, res, next) {
  const { email, username, password } = req.body;

  if (!validator.isStrongPassword(password)) {
    return next(createError(400, "Password must contain at least 8 characters, including at least 1 lowercase character, 1 uppercase character, 1 number and 1 symbol"));
  }
 
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

    let newUser = new User({
      email,
      username,
      password: hashedPassword
    });

    if(req.file) newUser.profileImage = req.file.filename;

    await newUser.save();

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
      path: "/refresh-token",
    };

    res.cookie("accessCookie", accessToken, accessOptions);
    res.cookie("refreshCookie", refreshToken, refreshOptions);

    res.status(201).json({
      newUser
    }); 
  } catch (err) {
    if (err.name === "ValidationError") {
      const errMsg = Object.values(err.errors)[0].message;
      console.log(errMsg)
      return next(createError(400, errMsg));
    }
    next(
      createError(500, "Registration could not be completed. Please try again")
    );
  }
}

export default registerController;
