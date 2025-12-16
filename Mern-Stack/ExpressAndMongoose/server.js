require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT;
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));
const AllMyJokeRoutes = require("./routes/Joke.route");
AllMyJokeRoutes(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
