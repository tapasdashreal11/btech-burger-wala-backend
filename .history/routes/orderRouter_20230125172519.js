import express from "express";
import passport from "passport";

const orderRouter = express.Router();

orderRouter.route("/create");

export default orderRouter;
