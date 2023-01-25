import express from "express";
import passport from "passport";
import { placeOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.route("/create").post(isAuthenticated, placeOrder);

export default orderRouter;
