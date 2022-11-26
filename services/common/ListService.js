

exports.ListService = async (req, model, SearchArray) => {
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        const search = req.query?.search;

        let skip = (page - 1) * limit;

        let data;

        if (search !== undefined) {
            let SearchQuery = { $or: SearchArray };

            data = await model.aggregate([
                { $match: SearchQuery },
                {
                    $facet: {
                        Total: [{ $count: "count" }],
                        Rows: [{ $skip: skip }, { $limit: limit }],
                    },
                },
            ]);
        } else {
            data = await model.aggregate([
                { $match: SearchQuery },
                {
                    $facet: {
                        Total: [{ $count: "count" }],
                        Rows: [{ $skip: skip }, { $limit: limit }],
                    },
                },
            ]);
        }
        return { status: "ok", info: data };
    } catch (error) {
        return { status: "fail", info: error.message };
    }
};

exports.ListOneJoinService = async (req, model, SearchArray, joinStage, Project) => {
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        const search = req.query.search;

        let skip = (page - 1) * limit;

        let data;

        if (search !== undefined) {
            let SearchQuery = { $or: SearchArray };

            data = await model.aggregate([
                { $match: SearchQuery },
                joinStage,
                Project,
                {
                    $facet: {
                        Total: [{ $count: "count" }],
                        Rows: [{ $skip: skip }, { $limit: limit }],
                    },
                },
            ]);
        } else {
            data = await model.aggregate([
                { $match: SearchQuery },
                joinStage,
                Project,
                {
                    $facet: {
                        Total: [{ $count: "count" }],
                        Rows: [{ $skip: skip }, { $limit: limit }],
                    },
                },
            ]);
        }
        return { status: "ok", info: data };
    } catch (error) {
        return { status: "fail", info: error.message };
    }
};

exports.ListTwoJoinService = async (req, model, SearchArray, joinStage1, joinStage2, Project) => {
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        const search = req.query.search;

        let skip = (page - 1) * limit;

        let data;

        if (search !== undefined) {
            let SearchQuery = { $or: SearchArray };

            data = await model.aggregate([
                { $match: SearchQuery },
                joinStage1,joinStage2,Project,
                {
                    $facet: {
                        Total: [{ $count: "count" }],
                        Rows: [{ $skip: skip }, { $limit: limit }],
                    },
                },
            ]);
        } else {
            data = await model.aggregate([
                { $match: SearchQuery },
                joinStage1,joinStage2,Project,
                {
                    $facet: {
                        Total: [{ $count: "count" }],
                        Rows: [{ $skip: skip }, { $limit: limit }],
                    },
                },
            ]);
        }
        return { status: "ok", info: data };
    } catch (error) {
        return { status: "fail", info: error.message };
    }
};

exports.ListThreeJoinService = async (req, model, SearchArray, joinStage1, joinStage2, joinStage3, Project) => {
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        const search = req.query.search;

        let skip = (page - 1) * limit;

        let data;

        if (search !== undefined) {
            let SearchQuery = { $or: SearchArray };

            data = await model.aggregate([
                { $match: SearchQuery },
                joinStage1,joinStage2,joinStage3,Project,
                {
                    $facet: {
                        Total: [{ $count: "count" }],
                        Rows: [{ $skip: skip }, { $limit: limit }],
                    },
                },
            ]);
        } else {
            data = await model.aggregate([
                { $match: SearchQuery },
                joinStage1,joinStage2,joinStage3,Project,
                {
                    $facet: {
                        Total: [{ $count: "count" }],
                        Rows: [{ $skip: skip }, { $limit: limit }],
                    },
                },
            ]);
        }
        return { status: "ok", info: data };
    } catch (error) {
        return { status: "fail", info: error.message };
    }
};
