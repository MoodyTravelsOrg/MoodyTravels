import createError from "http-errors";

async function resetCookies(req, res, next) {
  try {
    // Clear the authentication cookies
    res.clearCookie("accessCookie", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 1000 * 60 * 20,
    });
    res.clearCookie("refreshCookie", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 1000 * 60 * 60 * 24,
      path: "/refresh-token",
    });
    res.status(200).json({ message: "Cookies cleared successfully" });
  } catch (err) {
    next(createError(500, "An unexpected error occurred. Please try again later!"));
  }
}

export default resetCookies;
