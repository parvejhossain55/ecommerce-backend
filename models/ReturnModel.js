const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const returnSchema = mongoose.Schema(
    {
        customerId: { type: ObjectId },
        orderNumber: { type: Number },
        vatTax: { type: Number },
        discount: { type: Number },
        otherCost: { type: Number },
        shippingCost: { type: Number },
        grandTotal: { type: Number },
        note: { type: String },
    },
    { timestamps: true, versionKey: false }
);
const Return = mongoose.model("Return", returnSchema);
module.exports = Return;
