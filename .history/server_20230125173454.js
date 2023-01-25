import connectDB from "./config/database.js";
import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectPassport from "./utils/Provider.js";
import session from "express-session";
import passport from "passport";
import userRouter from "./routes/userRouter.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import orderRouter from "./routes/orderRouter.js";

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
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/api/v1", userRouter);
app.use("/api/v1/order", orderRouter);

app.use(errorMiddleware);

app.listen(process.env.PORT, () =>
  console.log(`Server is listening to port ${process.env.PORT}`)
);
