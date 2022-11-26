const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const purchaseProuductSchema = mongoose.Schema(
    {
        purchaseId: { type: ObjectId },
        productId: { type: ObjectId },
        quantity: { type: Number },
        unitCost: { type: Number },
        total: { type: Number },
    },
    { timestamps: true, versionKey: false }
);
const PurchaseProduct = mongoose.model(
    "purchaseproducts",
    purchaseProuductSchema
);
module.exports = PurchaseProduct;
