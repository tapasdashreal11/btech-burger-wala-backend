import { asyncError } from "../middlewares/errorMiddleware.js";
import Order from "../models/orderModel.js";

export const placeOrder = asyncError(async (req, res, next) => {
  const { shippingInfo, orderItems, payment, price, tax, shipping, totalAmt } =
    req.body;

  const { _id: user } = req.user;

  const orderOptions = {
    shippingInfo,
    orderItems,
    payment,
    price,
    tax,
    shipping,
    totalAmt,
    user,
  };

  const order = await Order.create(orderOptions);

  res.status(201).json({
    success: true,
    message: "Order placed successfully!",
    order,
  });
});
