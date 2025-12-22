require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db.config");
const PlayerRoutes = require("./routes/player.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(PlayerRoutes);

connectDB(process.env.MONGO_URI);

const port = process.env.PORT;

app.listen (
    port,
    () => {
        console.log("Server is Running on PORT : "+port)
    }
)