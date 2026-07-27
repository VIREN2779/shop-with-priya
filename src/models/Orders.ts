import mongoose, { Schema, models, model } from "mongoose";

const OrderSchema = new Schema(
    {
        productName: { type: String, required: true },
        imageUrl: { type: String },
        supplierName: { type: String, required: true },
        orderDate: { type: Date, required: true },
        priority: {
            type: String,
            enum: ["today", "this_weekend", "in_2_days", "in_a_week", "custom"],
            required: true,
        },
        status: {
            type: String,
            enum: ["received", "pending", "delivered"],
            default: "pending",
        },
    },
    { timestamps: true } // adds createdAt, updatedAt automatically
);

export default models.Order || model("Order", OrderSchema);