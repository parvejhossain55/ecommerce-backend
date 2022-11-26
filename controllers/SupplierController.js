const Supplier = require("../models/SupplierModel");
const { ObjectId } = require("mongoose").Types;
const { CreateService } = require("../services/common/CreateService");
const { UpdateServiceById } = require("../services/common/UpdateService");
const { FindService } = require("../services/common/FindService");
const { DropDownService } = require("../services/common/DropDownService");
const { DeleteServiceById } = require("../services/common/DeleteService");
const { ListService } = require("../services/common/ListService");

exports.AddSupplier = async (req, res) => {
    try {
        const result = await CreateService(req, Supplier);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.UpdateSupplier = async (req, res) => {
    try {
        const result = await UpdateServiceById(req, Supplier);
        if (result.status !== "fail") {
            res.status(200).json({
                ...result,
                msg: "Supplier Successfully Updated",
            });
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.GetSupplierById = async (req, res) => {
    try {
        let id = req.params.id;
        const result = await FindService({ _id: ObjectId(id) }, Supplier);
        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.DropdownSupplier = async (req, res) => {
    try {
        // const id = req.headers.id;
        const result = await DropDownService({}, { name: 1 }, Supplier);
        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.DeleteSupplier = async (req, res) => {
    try {
        const result = await DeleteServiceById(req, Supplier);
        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};

exports.SupplierList = async (req, res) => {
    try {
        let checkRegex = { $regex: req.query.search, $options: "i" };
        let searchArray = [{ name: checkRegex }];

        const result = await ListService(req, Supplier, searchArray);

        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};
