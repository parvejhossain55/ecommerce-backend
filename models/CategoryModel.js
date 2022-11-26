const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, "Please provide a category name"],
            unique: true,
        },
        slug: {
            type: String,
        },
        description: {
            type: String,
        },
        products: [
            {
                type: ObjectId,
                ref: "Product",
            },
        ],
    },
    { timestamps: true, versionKey: false }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
