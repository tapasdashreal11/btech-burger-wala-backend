import ErrorHandler from "../utils/ErrorHandler.js";

export const isAuthenticated = (req, res, next) => {
  const token = req.cookies["connect.sid"];
  console.log({ token });
  if (!token) next(new ErrorHandler("Not Logged In", 401));
  next();
};
