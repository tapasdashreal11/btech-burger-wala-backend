import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
    shippingInfo{
        hNo: String,
        city: String,
        state: String,
        country: String,
            pincode: String,
        country: String,
    }
})