const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const orderSchema = mongoose.Schema(
    {
        userId: { type: ObjectId },
        orderNumber: { type: Number },
        vatTax: { type: Number },
        discount: { type: Number },
        grandTotal: { type: Number },
        shipDate: { type: Date },
        tranStatus: { type: String },
        shippingCost: { type: Number },
        otherCost: { type: Number },
        note: { type: String },
    },
    { timestamps: true, versionKey: false }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
