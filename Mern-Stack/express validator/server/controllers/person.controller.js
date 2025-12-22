const Person = require("./../models/person.model");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");


module.exports.createPerson = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(422).json({
            message:"num must be not empty and more than 2 chars.",
            errors: errors.array(),
        })
    }
    try{
        const person = await Person.create(req.body);
        res.json(person);
    } catch (error) {
        console.log(error);
    }
}