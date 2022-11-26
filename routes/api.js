const router = require("express").Router();
const AuthMiddleware = require("../middleware/AuthMiddleware");
const UserController = require("../controllers/UserController");
const SupplierController = require("../controllers/SupplierController");
const ExpenseController = require("../controllers/ExpenseController");


// User Routes
router.post("/UserRegister", UserController.UserRegister);
router.post("/UserLogin", UserController.UserLogin);
router.post("/VerifyUserCode", UserController.VerifyCode);
router.post("/ForgotPass/:email", UserController.ForgotPass);
router.put("/ChangePassword", UserController.ChangePassword);
router.put("/UpdateUser/:id", UserController.UpdateUser);

// Supplier Routes
router.post("/AddSupplier", AuthMiddleware, SupplierController.AddSupplier);
router.put("/UpdateSupplier/:id", AuthMiddleware, SupplierController.UpdateSupplier);
router.get("/GetSupplierById/:id", AuthMiddleware, SupplierController.GetSupplierById);
router.get("/DropdownSupplier", AuthMiddleware, SupplierController.DropdownSupplier);
router.get("/SupplierList", AuthMiddleware, SupplierController.SupplierList);
// router.get("/DeleteBrand", AuthMiddleware, BrandController.DeleteBrand);

// Expense Routes
router.post("/AddExpense", AuthMiddleware, ExpenseController.AddExpense);
router.put("/UpdateExpense/:id", AuthMiddleware, ExpenseController.UpdateExpense);
router.put("/ExpenseList", AuthMiddleware, ExpenseController.ExpenseList);


module.exports = router;
