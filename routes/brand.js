const router = require("express").Router();
const AuthMiddleware = require("../middleware/AuthMiddleware");
const BrandController = require("../controllers/BrandController");

// Brand Routes For Backend
router.post("/AddBrand", AuthMiddleware, BrandController.AddBrand);
router.put("/UpdateBrand/:id", AuthMiddleware, BrandController.UpdateBrand);
router.get("/GetBrandById/:id", AuthMiddleware, BrandController.GetBrandById);
router.get("/DropdownBrand", AuthMiddleware, BrandController.DropdownBrand);
router.get("/BrandList", AuthMiddleware, BrandController.BrandList);
// router.get("/DeleteBrand", AuthMiddleware, BrandController.DeleteBrand);

module.exports = router;
