import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  shippingInfo: {
    hNo: String,
    city: String,
    state: String,
    country: String,
    pinCode: String,
    contact: String,
  },

  orderItems: [
    {
      name: String,
      price: Number,
      qty: Number,
    },
  ],

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  paymentMethod: {
    type: String,
    enum: ["Online", "COD"],
    default: "COD",
  },
});
