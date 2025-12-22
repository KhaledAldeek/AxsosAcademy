const Player = require("./../models/player.model");
const { body } = require("express-validator");

const validatePlayer = [
    body("name")
        .notEmpty().withMessage("name field is required")
        .trim()
        .isLength({min : 2}).withMessage("name must be at least 2 chars."),

    body("position")
        .notEmpty().withMessage("position field is required")
        .trim()
        .isLength({min : 5}).withMessage("position must be at least 5 chars."),

]

module.exports = validatePlayer;