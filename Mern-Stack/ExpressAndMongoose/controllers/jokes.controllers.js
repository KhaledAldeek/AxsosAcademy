const Joke = require('../models/jokes.model');
const {ObjectId} = require("mongodb");


module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => res.json(allJokes))
        .catch((err) => res.status(500).json({ message: "Error", err }));
};

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findById(req.params.id)
        .then(joke => res.json(joke))
        .catch(err => res.status(400).json({ message: "Error", err }));
};

module.exports.createNewJoke = (req, res) => {
    const {setup, punchline} = req.body;
    Joke.create({"setup": setup,
                "punchline":punchline})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({ message: "Error", err }));
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updated => res.json(updated))
        .catch(err => res.status(400).json({ message: "Error", err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.status(400).json({ message: "Error", err }));
};
