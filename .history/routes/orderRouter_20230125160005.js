import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
    shippingInfo{
        hNo: String,
        city:String
    }
})