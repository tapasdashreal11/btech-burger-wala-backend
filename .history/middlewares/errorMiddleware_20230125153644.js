export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
};
