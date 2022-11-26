const router = require("express").Router();
const AuthMiddleware = require("../middleware/AuthMiddleware");
const CategoryController = require("../controllers/CategoryController");

// Category Routes For Backend
router.post("/AddCategory", AuthMiddleware, CategoryController.AddCategory);
router.put("/UpdateCategory/:id", AuthMiddleware, CategoryController.UpdateCategory);
router.get("/GetCategoryById/:id", AuthMiddleware, CategoryController.GetCategoryById);
router.get("/DropdownCategory", AuthMiddleware, CategoryController.DropdownCategory); 
router.get("/CategoryList", AuthMiddleware, CategoryController.CategoryList);
// router.get("/DeleteBrand", AuthMiddleware, BrandController.DeleteBrand);

// Category Routes For Frontend
router.get("/GetCategoryBySlug/:slug", AuthMiddleware, CategoryController.GetCategoryBySlug);


module.exports = router;
