const { Router } = require("express");
const authenticationController = require("./authentication/controllers/authenticationController");
const productController = require("./product/controllers/productController");

const router = Router();
router.get("/auth", authenticationController.find);
router.get("/products/total", productController.getTotal);
router.get("/products", productController.getAll);
router.post("/products", productController.store);
router.delete("/products/:id", productController.delete);




module.exports = router;
