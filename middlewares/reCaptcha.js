import createError from "http-errors";

async function verifyReCaptcha(req, res, next) {
  const { reCaptchaToken } = req.body;

  if (!reCaptchaToken) {
    return next(createError(500, "server error!"));
  }

  try {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.SECRET}&response=${reCaptchaToken}` //  we have to talk on reCaptcha secret key
    };

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", settings);
    const data = await response.json();
    if (!data.success) {
      return next(createError(400, "Prove you're not a robot first!"));
    }
    next();
  } catch (error) {
    next(error);
  }
}

export default verifyReCaptcha;
