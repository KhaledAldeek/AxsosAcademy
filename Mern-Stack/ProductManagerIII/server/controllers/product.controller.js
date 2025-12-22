const Product = require("../models/product.model");
const { validationResult } = require("express-validator");
const HttpError = require("./../models/http-errors");

const createNewProduct = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            message: "failed hahaha",
        });
    }

    try {
        await Product.create(req.body);
        return res.json({ success: true });
    } catch (error) {
        return next(new HttpError("Creating product failed", 500));
        // أو لو بدك ترجع الخطأ مباشرة:
        // return res.status(500).json(error);
    }
};


const findAll = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.json(error)
    }
}

const findProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.json(error);
    }
}

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({success: true})
    } catch (error) {
        res.json(error);
    }
}
const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
        });
        return res.json(updatedProduct);
    } catch (error) {
        return res.status(400).json({message: "Update failed", error});
    }
};


module.exports = {createNewProduct, findAll, deleteProduct, findProduct, updateProduct};
