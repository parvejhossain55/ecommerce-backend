const Cart = require("../models/CartModel");
const { ProductListCartPageService } = require("../services/CartService");

exports.AddCartItem = async (req, res) => {
    const { userId, prodId } = req.body;

    const cart = await Cart.findOneAndUpdate(
        { userId: userId },
        { $push: { "products.productId": prodId, "products.quantity": 1 } },
        { upsert: true }
    );

    // console.log(userId);
    // console.log(cart);
};

exports.ProductListCartPage = async (req, res) => {
    try {
        let id = req.params.id;

        const result = await ProductListCartPageService(id, Cart);

        if (result.status !== "fail") {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ status: "fail", error: error.message });
    }
};