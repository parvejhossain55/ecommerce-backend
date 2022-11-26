const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const purchaseSchema = mongoose.Schema(
    {
        supplierId: { type: ObjectId },
        vatTax: { type: Number },
        discount: { type: Number },
        otherCost: { type: Number },
        shippingCost: { type: Number },
        grandTotal: { type: Number },
        note: { type: String },
    },
    { timestamps: true, versionKey: false }
);
const Purchase = mongoose.model("Purchase", purchaseSchema);
module.exports = Purchase;
