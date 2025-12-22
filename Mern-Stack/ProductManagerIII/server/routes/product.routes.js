const ProductController = require('../controllers/product.controller');
const {check} = require("express-validator")
// const { Router } = require("express");


module.exports = (app) => {
    app.post('/api/createproduct', [check('name').not().isEmpty(), check('name').isLength({min : 5})], ProductController.createNewProduct);
    app.get("/api/products", ProductController.findAll);
    app.get("/api/products/:id", ProductController.findProduct)
    app.delete("/api/deleteproduct/:id", ProductController.deleteProduct);
    app.put("/api/updateproduct/:id", ProductController.updateProduct);
}