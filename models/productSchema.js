const {mongoose, Schema} = require("mongoose");

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

mongoose.pluralize(null)
const Product = mongoose.model("Product", productSchema);
module.exports = Product;