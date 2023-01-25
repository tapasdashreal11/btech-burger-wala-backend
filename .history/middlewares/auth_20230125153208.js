const isAuthenticated = (req, res, next) => {
  const token = req.cookies("connect.sid");
  console.log({ token });
  next();
};
