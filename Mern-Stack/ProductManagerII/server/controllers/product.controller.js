const Product = require("../models/product.model");

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then((product) => {
            res.json(product);
        })
        .catch(err => {
            res.json(err);
        })
}

module.exports.findAll = (req, res) => {
    Product.find()
    .then((products) => {
        res.json(products);
    })
    .catch(err => {
        res.json(err);
    })
}

module.exports.findProduct = (req, res) => {
    Product.findById(req.params.id)
        .then((product) => {
            res.json(product);
        })
        .catch(err => {
            res.json(err);
        })
}