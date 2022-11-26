const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;
const supplierSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name"],
            trim: true,
            minLength: [3, "Name must be at least 3 characters."],
            maxLength: [100, "Name is too large"],
        },
        email: {
            type: String,
            validate: [validator.isEmail, "Provide a valid Email"],
            trim: true,
            lowercase: true,
            unique: true,
        },
        phone: {
            type: String,
            required: [true, "Please provide a contact number"],
            validate: {
                validator: (value) => {
                    return validator.isMobilePhone(value);
                },
                message: "Please provide a valid phone number",
            },
        },
        // emergencyPhone: {
        //     type: String,
        //     required: [true, "Please provide  a emergency contact number"],
        //     validate: {
        //         validator: (value) => {
        //             return validator.isMobilePhone(value);
        //         },
        //         message: "Please provide a valid phone number",
        //     },
        // },
        // tradeLicenceNumber: {
        //     type: Number,
        //     required: [true, "Please provide your trade licence number"],
        // },
        // presentAddress: {
        //     type: String,
        //     required: [true, "Please provide your present address"],
        // },
        // permanentAddress: {
        //     type: String,
        //     required: [true, "Please provide your present address"],
        // },
        // location: {
        //     type: String,
        //     enum: {
        //         values: [
        //             "dhaka",
        //             "rajshahi",
        //             "chattogram",
        //             "sylhet",
        //             "khulna",
        //             "barishal",
        //             "rangpur",
        //             "mymensingh",
        //         ],
        //         message: "{VALUE} is not  a correct division!",
        //     },
        // },
        // imageURL: {
        //     type: String,
        //     validate: [validator.isURL, "Please provide a valid url"],
        // },
        // nationalIdImageURL: {
        //     type: String,
        //     validate: [validator.isURL, "Please provide a valid url"],
        // },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
        },
    },
    { timestamps: true, versionKey: false }
);

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
