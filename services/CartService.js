const { ObjectId } = require("mongoose").Types;

exports.ProductListCartPageService = async (id, model) => {
    try {
        data = await model.aggregate([
            { $match: { userId: ObjectId(id) } },
            {
                $lookup: {
                    from: "products",
                    localField: "products",
                    foreignField: "_id",
                    as: "products",
                },
            },
        ]);
        return { status: "ok", info: data };
    } catch (error) {
        return { status: "fail", info: error.message };
    }
};
