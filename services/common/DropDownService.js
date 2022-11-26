exports.DropDownService = async (match, project, model) => {
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
