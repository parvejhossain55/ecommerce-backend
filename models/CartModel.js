const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const cartSchema = mongoose.Schema(
    {
        userId: {
            type: ObjectId,
            ref: "users",
        },
        products: [
            {
                productId: {
                    type: ObjectId,
                },
                quantity: {
                    Type: Number,
                },
            },
        ],
    },
    { timestamps: true, versionKey: false }
);

const Category = mongoose.model("Cart", cartSchema);
module.exports = Category;
