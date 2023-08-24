const router = require("express").Router();
const {allProduct, updateProduct, createProduct, deleteProduct} = require('../controllers/productController')

router.get("/products", allProduct)
router.put("/product/:product_id", updateProduct)
router.post("/product/new", createProduct)
router.delete("/product/:product_id", deleteProduct)

module.exports = router