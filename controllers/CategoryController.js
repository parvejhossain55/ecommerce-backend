const Category = require("../models/CategoryModel");
const { ObjectId } = require("mongoose").Types;
const { CreateService } = require("../services/common/CreateService");
const { UpdateServiceById } = require("../services/common/UpdateService");
const { DropDownService } = require("../services/common/DropDownService");
const { DeleteServiceById } = require("../services/common/DeleteService");
const { ListOneJoinService } = require("../services/common/ListService");
const { FindOneJoinService } = require("../services/common/FindService");
const { SlugUrl } = require("../utils/SlugifyUrl");

exports.AddCategory = async (req, res) => {
    try {
        req.body.slug = SlugUrl(req.body.name);

        const result = await CreateService(req, Category);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.UpdateCategory = async (req, res) => {
    try {
        const result = await UpdateServiceById(req, Category);
        if (result.status !== "fail") {
            res.status(200).json({
                ...result,
                msg: "Category Successfully Updated",
            });
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.GetCategoryById = async (req, res) => {
    try {
        let id = req.params.id;
        const result = await FindService({ _id: ObjectId(id) }, Category);
        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};
exports.GetCategoryBySlug = async (req, res) => {
    try {
        let slug = req.params.slug;
        const joinStage = { $lookup : {from: 'products', localField: "products", foreignField: "_id", as:"products"}}
        const project = { $project : {"upadtedAt" : 0}}
        const result = await FindOneJoinService({ slug: slug }, Category, joinStage, project);
        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.DropdownCategory = async (req, res) => {
    try {
        // const id = req.headers.id;
        const result = await DropDownService({}, { name: 1, slug:1 }, Category);
        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.DeleteCategory = async (req, res) => {
    try {
        const result = await DeleteServiceById(req, Category);
        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.CategoryList = async (req, res) => {
    try {
        let checkRegex = { $regex: req.query.search, $options: "i" };
        let searchArray = [{ name: checkRegex }, { description: checkRegex }];

        let joinStage = {
            $lookup: {
                from: "products",
                localField: "products",
                foreignField: "_id",
                as: "products",
            },
        };

        let project = { $project : {"name": 1, "description": 1, "products.name":1, "products.description":1,"products.primaryImage":1} }
        // let project = { $project : {"_id":0}}

        const result = await ListOneJoinService(req, Category, searchArray, joinStage, project);

        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};
