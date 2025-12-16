const mongoose = require('mongoose');
const JokeSchema = new mongoose.Schema({
    setup: {type: String, required: true, minLength:[10, "setup must be at least 10 chars"]},
    punchline: {type: String, required: true, minLength:[3, "punchline must be at least 3 chars"]},
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;