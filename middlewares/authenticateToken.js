import jwt from "jsonwebtoken";
import createError from "http-errors";
import User from "../models/User.js"

async function authenticateToken(req, res, next) {
    try {
        // try to find a JWT in:
        // – the refreshCookie, for requests to refresh tokens
        // – or the accessCookie, for all other requests
        const { accessCookie, refreshCookie } = req.cookies;

        // throw an error if both accessCookie and refreshCookie are falsy
        if (!accessCookie && !refreshCookie) {
            throw new Error("User could not be authenticated. Please try again");
        }

        let token;

        // if refreshCookie is truthy, use it, for all other requests, use the accessCookie
        if (refreshCookie) {
            token = refreshCookie;
        } else {
            token = accessCookie;
        }

        // if we got a token from the cookie, try to verify it
        // 1) token we want to decode
        // 2) the secret only known to our server
        const { id } = jwt.verify(token, process.env.JWT_SECRET);

        // find the authenticated user in te "users" collection
        const foundUser = await User.findById(id);

        if (foundUser) {
            // add a "user" property to req object containing the found user
            req.user = {
            id: foundUser.id,
            username: foundUser.username,
            profileImage: foundUser.profileImage,
            };
        } else {
            return next(createError(404, "User not found"));
        }

        // if token is valid, go to next middleware
        next();

    } catch (err) {
        next(createError(401, err.message))
    }
}

export default authenticateToken;