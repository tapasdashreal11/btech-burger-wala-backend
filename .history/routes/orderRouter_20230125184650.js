import express from "express";
import passport from "passport";
import { getMyOrders, placeOrder } from "../controllers/orderController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const orderRouter = express.Router();

orderRouter.route("/create").post(placeOrder);
orderRouter.route("/").get(getMyOrders);
orderRouter.route("/:id").get(getOrderById);
// orderRouter.route("/create").post(isAuthenticated, placeOrder);

export default orderRouter;
