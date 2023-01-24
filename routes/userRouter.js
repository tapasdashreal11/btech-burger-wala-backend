import express from "express";
import passport from "passport";

const userRouter = express.Router();
userRouter
  .route("/google-login")
  .get(passport.authenticate("google", { scope: ["profile"] }));
userRouter
  .route("/login")
  .get(
    passport.authenticate("google", {
      scope: ["profile"],
      successRedirect: process.env.FRONTEND_URL,
    })
  );

export default userRouter;
