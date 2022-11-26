const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, "Please provide a brand name"],
            maxLength: 100,
            unique: true,
        },
        description: { type: String, trim: true },
        imageUrl: {
            type: String,
            validate: [validator.isURL, "Please provide a valid URL"],
        },
        email: {
            type: String,
            validate: [validator.isEmail, "Please provide a valid brand email"],
        },
        website: {
            type: String,
            validate: [
                validator.isURL,
                "Please provide a valid brand website url",
            ],
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
        },
    },
    { timestamps: true, versionKey: false }
);

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
