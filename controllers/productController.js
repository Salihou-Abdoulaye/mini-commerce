const Product = require("../models/productSchema")

const allProduct = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.json({
            message: "Error, can't get all products", 
            errors: error
        })
    }
}

const updateProduct = async (req, res) => {
    
}

module.exports = {allProduct}