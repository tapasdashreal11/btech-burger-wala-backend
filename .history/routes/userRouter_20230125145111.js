import express from "express";
import passport from "passport";
import { logout, myProfile } from "../controllers/userController.js";

const userRouter = express.Router();
userRouter
  .route("/google-login")
  .get(passport.authenticate("google", { scope: ["profile"] }));

userRouter.route("/google/callback").get(
  passport.authenticate("google", {
    scope: ["profile"],
    successRedirect: process.env.FRONTEND_URL,
  })
);

userRouter
  .route("/google/callback")
  .get(passport.authenticate("google"), (req, res, next) =>
    res.send("Logged in")
  );

userRouter.route("/me").get(myProfile);
userRouter.route("/logout").get(logout);

export default userRouter;
