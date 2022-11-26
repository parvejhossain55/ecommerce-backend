exports.UpdateService = async (find, update, model) => {
    try {
        await model.aggregate([{ $match: find }, { $set: update }]);
        return { status: "ok" };
    } catch (error) {
        return { status: "fail", error: error.message };
    }
};

exports.UpdateServiceById = async (req, model) => {
    try {
        let id = req.params.id;
        await model.findOneAndUpdate({ _id: id }, req.body, { runValidators: true });
        return { status: "ok"};
    } catch (error) {
        return { status: "fail", info: error.message };
    }
};
