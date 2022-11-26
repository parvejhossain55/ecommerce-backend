const router = require("express").Router();
const CartController = require("../controllers/CartController");
// const AuthMiddleware = require("../middleware/AuthMiddleware")

// Cart Route for Frontend
router.post("/AddCartItem", CartController.AddCartItem);
router.get(
    "/ProductListForCartPage/:id",
    CartController.ProductListCartPage
);

module.exports = router;
