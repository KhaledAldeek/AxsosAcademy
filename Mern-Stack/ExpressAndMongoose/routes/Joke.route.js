const JokeController = require('../controllers/jokes.controllers');

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/joke/:id', JokeController.findOneSingleJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.patch('/api/joke/:id', JokeController.updateExistingJoke);
    app.delete('/api/joke/:id', JokeController.deleteAnExistingJoke);
}

