exports.FindService = async (find, model) => {
    try {
        let data = await model.aggregate([{ $match: find }]);
        return { status: "ok", info: data[0] };
    } catch (error) {
        return { status: "fail", error: error.message };
    }
};

exports.FindByProject = async (match, project, model) => {
    try {
        let data = await model.aggregate([
            { $match: match },
            { $project: project },
        ]);
        return { status: "ok", info: data };
    } catch (error) {
        return { status: "fail", info: error.message };
    }
};

// exports.FindMultiValue = async (find, ids, model) => {
//     try {
//         let data = await model.find({ "_id": { $in: ids } });
//         return { status: "ok", info: data };
//     } catch (error) {
//         return { status: "fail", info: error.message };
//     }
// };
exports.FindMultiValue = async (values, model) => {
    try {
        let data = await model.find({ "_id": { $in: values } });
        return { status: "ok", info: data };
    } catch (error) {
        return { status: "fail", info: error.message };
    }
};

exports.FindOneJoinService = async (find, model, joinStage, Project) => {
    try {
        data = await model.aggregate([
            { $match: find },
            joinStage,
            Project,
            { $addFields: { count: { $size: "$products" } } },
        ]);
        return { status: "ok", info: data[0] };
    } catch (error) {
        return { status: "fail", info: error.message };
    }
};
