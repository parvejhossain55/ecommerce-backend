const router = require("express").Router();
const AuthMiddleware = require("../middleware/AuthMiddleware");
const ProductController = require("../controllers/ProductController");

// Product Routes For Backend
router.post("/AddProduct", AuthMiddleware, ProductController.AddProduct);
router.put("/UpdateProduct/:id", AuthMiddleware, ProductController.UpdateProduct);
router.get("/GetProductById/:id", AuthMiddleware, ProductController.GetProductById);
router.get("/DropdownProduct", AuthMiddleware, ProductController.DropdownProduct);
router.get("/ProductList", AuthMiddleware, ProductController.ProductList);
// router.get("/DeleteBrand", AuthMiddleware, BrandController.DeleteBrand);

// Product Routes For Frontend




module.exports = router;
