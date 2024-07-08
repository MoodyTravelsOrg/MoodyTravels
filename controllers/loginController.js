import User from "../models/User.js";
import createError from "http-errors";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";

async function loginController(req, res, next) {
  const { username, password } = req.body;

  try {
    const foundUser = await User.findOne({ username });

    if (!foundUser) {
      return next(
        createError(
          401,
          "User not found. Please check your username and try again!"
        )
      );
    }

    const matchingPass = await compare(password, foundUser.password);

    if (!matchingPass) {
      return next(createError(401, "Incorrect password!"));
    }

 /*    await foundUser.populate("recommendation", {
      // we have to bring in the necessary properties after we decide one our recommendation model!!!
    }); */

    const accessToken = jwt.sign({ id: foundUser.id }, process.env.JWT_SECRET, {
      expiresIn: "20m",
    });
    const refreshToken = jwt.sign(
      { id: foundUser.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

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
      id: foundUser.id,
      username: foundUser.username,
      profileImage: foundUser.profileImage,
    });
  } catch (err) {
    next(
      createError(500, "An unexpected error occurred. Please try again later!")
    );
  }
}

export default loginController;
