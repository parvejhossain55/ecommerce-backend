const Expense = require("../models/ExpenseModel");
const { CreateService } = require("../services/common/CreateService");
const { UpdateServiceById } = require("../services/common/UpdateService");
const { ListService } = require("../services/common/ListService");

exports.AddExpense = async (req, res) => {
    try {
        const result = await CreateService(req, Expense);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.UpdateExpense = async (req, res) => {
    try {
        const result = await UpdateServiceById(req, Expense);
        if (result.status !== "fail") {
            res.status(200).json({
                ...result,
                msg: "Expense Successfully Updated",
            });
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.ExpenseList = async (req, res) => {
    try {
        let checkRegex = { $regex: req.query.search, $options: "i" };
        let searchArray = [{ name: checkRegex }, { description: checkRegex }];
        let joinStage = {};

        const result = await ListService(req, Category, searchArray);

        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};
