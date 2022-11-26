const Brand = require("../models/BrandModel");
const { ObjectId } = require("mongoose").Types;
const { CreateService } = require("../services/common/CreateService");
const { UpdateServiceById } = require("../services/common/UpdateService");
const { FindService } = require("../services/common/FindService");
const { DropDownService } = require("../services/common/DropDownService");
const { DeleteServiceById } = require("../services/common/DeleteService");
const { ListService } = require("../services/common/ListService");

exports.AddBrand = async (req, res) => {
    try {
        const result = await CreateService(req, Brand);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.UpdateBrand = async (req, res) => {
    try {
        const result = await UpdateServiceById(req, Brand);
        if (result.status !== "fail") {
            res.status(200).json({
                ...result,
                msg: "Brand Successfully Updated",
            });
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.GetBrandById = async (req, res) => {
    try {
        let id = req.params.id;
        const result = await FindService({ _id: ObjectId(id) }, Brand);
        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.DropdownBrand = async (req, res) => {
    try {
        const result = await DropDownService({}, { name: 1 }, Brand);
        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.DeleteBrand = async (req, res) => {
    try {
        const result = await DeleteServiceById(req, Brand);
        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.BrandList = async (req, res) => {
    try {
        let checkRegex = { $regex: req.query.search, $options: "i" };
        let searchArray = [{ name: checkRegex }, { description: checkRegex }];

        const result = await ListService(req, Brand, searchArray);

        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};
