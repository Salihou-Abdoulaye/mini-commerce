const router = require("express").Router();
const {allProduct} = require('../controllers/productController')

router.get("/products", allProduct)

module.exports = router