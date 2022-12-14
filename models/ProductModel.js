const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const valid = require("validator");

// schema design
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name for this product."],
            trim: true,
            unique: [true, "Name must be unique"],
            minLength: [3, "Name must be at least 3 characters."],
            maxLength: [100, "Name is too large"],
        },

        description: {
            type: String,
            required: true,
        },

        unit: {
            type: String,
            required: true,
            enum: {
                values: ["gm", "kg", "litre", "pcs", "bag"],
                message:
                    "unit value can't be {VALUE}, must be kg/litre/pcs/bag",
            },
        },

        weigth: {
            type: String,
            required: true,
        },

        color: {
            type: String,
            required: true,
        },

        types: {
            type: String,
            enum: {
                values: ["feature", "onsale"],
            },
            default: "onsale",
        },

        price: {
            type: Number,
            required: true,
            min: [0, "Product price can't be negative"],
        },

        quantity: {
            type: Number,
            required: true,
            min: [0, "Product quantity can't be negative"],
        },

        status: {
            type: String,
            enum: {
                values: ["inStock", "outStock"],
                message: " status can't be {VALUE} ",
            },
            default: "inStock",
        },

        primaryImage: [
            {
                type: String,
                required: true,
            },
        ],

        category: {
            type: ObjectId,
            ref: "Category",
        },

        brand: {
            type: ObjectId,
            ref: "Brand",
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);

productSchema.pre("save", function (next) {
    if (this.quantity == 0) {
        this.status = "out-of-stock";
    }
    next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
