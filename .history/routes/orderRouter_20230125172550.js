import express from "express";
import passport from "passport";

const orderRouter = express.Router();

orderRouter.route("/").post();

export default orderRouter;
