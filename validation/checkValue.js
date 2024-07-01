import createError from "http-errors";

function checkValues(prop) {
  return function (req, res, next) {
    prop.forEach((field) => {
      if (!req.body[field]) {
        return next(
          createError(
            400,
            `${field.slice(0, 1).toUpperCase() + field.slice(1)} is required`
          )
        );
      }
    });
    next();
  };
}

export default checkValues;
