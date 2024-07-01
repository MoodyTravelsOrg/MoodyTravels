import jwt from "jsonwebtoken";

export function refreshTokens(req, res, next) {
    // if the user has included a valid refresh token in their request
    // generate a new access token and a new refresh token and send back in the response

    // create token 1) payload = user's id 2) Secret key 3) optional configuration
    const accessToken = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: "15m" });
    const refreshToken = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // store new JWTs inside their own cookies
    // options for all cookies
    const cookieOptions = {
        secure: true,
        httpOnly: true,
        sameSite: "Strict"
    };

    //additional options for each cookie
    const accessOptions = {
        ...cookieOptions,
        maxAge: 1000 * 60 * 15 // 15 mins
    };

    const refreshOptions = {
        ...cookieOptions,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        path: "/refresh-token"
    };

    res.cookie("accessCookie", accessToken, accessOptions);
    res.cookie("refreshCookie", refreshToken, refreshOptions);

    // don't send back any data
    res.end();
}