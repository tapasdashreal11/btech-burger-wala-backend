import connectDB from "./config/database.js";
import express from "express";
import dotenv from "dotenv";
import connectPassport from "./utils/Provider.js";
import session from "express-session";
import passport from "passport";
import userRouter from "./routes/userRouter.js";
import cookieParser from "cookie-parser";

dotenv.config({
  path: "./config/config.env",
});

connectDB();

connectPassport();

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.use("/api/v1", userRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server is listening to port ${process.env.PORT}`)
);
