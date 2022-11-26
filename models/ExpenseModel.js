const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, "Please Type a Expense Name"],
            unique: true,
        },
        expenseType: {
            type: String,
        },
        amount: {
            type: Number,
            required: [true, "Provide expense amount"],
        },
        document: [
            {
                type: String,
            },
        ],
        note: {
            type: String,
        },
    },
    { timestamps: true, versionKey: false }
);

const Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;
