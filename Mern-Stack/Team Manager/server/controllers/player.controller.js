const Player = require("./../models/player.model");
const { validationResult } = require("express-validator");


const createPlayer = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.mapped()});
    }

    try {
        await Player.create(req.body);
        res.json({success : true});
    } catch (error) {
        res.json(error);
    }
}

const getPlayer = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        res.json(player);
    } catch (error) {
        res.json(error);
    }
}

const getAllPlayers = async (req, res) => {
    try{
        const players = await Player.find();
        res.json(players);
    } catch (error) {
        res.json(error);
    }
}

module.exports = {createPlayer, getAllPlayers, getPlayer}