export const placeOrder = (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    payment,
    price,
    tax,
    shipping,
    totalAmt,
    orderStatus,
    deliveredAt,
  } = req.body;
};
