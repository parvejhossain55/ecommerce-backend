
exports.DeleteService = async (find, model) => {
    try {
        let data = await model.deleteOne(find);
        return { status: "ok", info: data };
    } catch (error) {
        return { status: "fail", error: error.message };
    }
};


exports.DeleteParentChildService = async (req, parent, child, propName) => {
    try {
        let data = await model.deleteOne(find);
        return { status: "ok", info: data };
    } catch (error) {
        return { status: "fail", error: error.message };
    }
};


exports.DeleteServiceById = async (req, model) => {
    try {
        const id = req.params.id;
        let data = await model.deleteOne({_id: id});
        return { status: "ok", info: data };
    } catch (error) {
        return { status: "fail", error: error.message };
    }
};
