const Product = require("../models/ProductModel");
const { ObjectId } = require("mongoose").Types;
const { CreateService } = require("../services/common/CreateService");
const { UpdateServiceById } = require("../services/common/UpdateService");
const {
    FindService,
    FindMultiValue,
} = require("../services/common/FindService");
const { DropDownService } = require("../services/common/DropDownService");
const { DeleteServiceById } = require("../services/common/DeleteService");
const { ListTwoJoinService } = require("../services/common/ListService");

exports.AddProduct = async (req, res) => {
    try {
        const result = await CreateService(req, Product);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.UpdateProduct = async (req, res) => {
    try {
        const result = await UpdateServiceById(req, Product);
        if (result.status !== "fail" && result.value !== null) {
            res.status(200).json({
                ...result,
                msg: "Product Successfully Updated",
            });
        } else {
            res.status(500).json({ ...result, msg: "Invalid Id No" });
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.GetProductById = async (req, res) => {
    try {
        let id = req.params.id;
        const result = await FindService({ _id: ObjectId(id) }, Product);
        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.DropdownProduct = async (req, res) => {
    try {
        // const id = req.headers.id;
        const result = await DropDownService({}, { name: 1 }, Product);
        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.ProductList = async (req, res) => {
    try {
        let checkRegex = { $regex: req.query.search, $options: "i" };
        let searchArray = [
            { name: checkRegex },
            { description: checkRegex },
            { color: checkRegex },
            { unit: checkRegex },
        ];
        let joinStage1 = {
            $lookup: {
                from: "categories",
                localField: "category",
                foreignField: "_id",
                as: "category",
            },
        };

        let joinStage2 = {
            $lookup: {
                from: "brands",
                localField: "brand",
                foreignField: "_id",
                as: "brand",
            },
        };

        let project = { $project: { updatedAt: 0 } };

        const result = await ListTwoJoinService(
            req,
            Product,
            searchArray,
            joinStage1,
            joinStage2,
            project
        );

        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.DeleteProduct = async (req, res) => {
    try {
        const result = await DeleteServiceById(req, Product);
        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};
