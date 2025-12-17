const ProductController = require('../controllers/product.controller');

module.exports = (app)=> {
    app.post('/api/createproduct', ProductController.createNewProduct);
    app.get("/api/products", ProductController.findAll);
    app.get("/api/products/:id", ProductController.findProduct)
}