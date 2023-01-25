import express from "express";
import passport from "passport";
import {
  getMyOrders,
  getOrderById,
  placeOrder,
  processOrder,
} from "../controllers/orderController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const orderRouter = express.Router();

orderRouter.route("/create").post(placeOrder);
orderRouter.route("/").get(getMyOrders);
orderRouter.route("/:id").get(getOrderById);
orderRouter.route("/admin/:id").get(processOrder);
// orderRouter.route("/create").post(isAuthenticated, placeOrder);

export default orderRouter;
