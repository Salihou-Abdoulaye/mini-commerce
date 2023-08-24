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

const createProduct = async (req, res) => {
    try {
        const newProduct = await new Product(req.body);
        newProduct.save();
        res.json({
            message: "Congrat ! add new product", 
            newProduct
        })
        
    } catch (error) {
        res.json({
            message: "Error, can't to add product", 
            errors: error
        })
    }
  };

const updateProduct = async (req, res) => {
    const id = req.params.product_id 
    const productData = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
    };
    try {
        const product = await Product.findOneAndUpdate(  {_id: id}, productData)
        res.send({ msg: "product updated!", product });
    } catch (error) {
        res.json({
            message: "Error, can't update product, try after", 
            errors: error
        })
    }
}

const deleteProduct = async (req, res) => {
    const id = req.params.product_id;
    await Product.deleteOne({ _id: id });
    res.send({ msg: " product successfully deleted!" });
};
module.exports = {allProduct, updateProduct, createProduct, deleteProduct}