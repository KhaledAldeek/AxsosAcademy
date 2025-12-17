const Product = require("../models/product.model");

module.exports.createNewProduct = (req, res) => {
    // console.log(req.body);
    // const {name, description, price} = req.body;
    // console.log(name)
    // console.log(description)
    // console.log(price)
    Product.create(req.body)
        .then((product) => {
            res.json(product);
        })
        .catch(err => {
            res.json(err);
        })
}


////////// check that ...
