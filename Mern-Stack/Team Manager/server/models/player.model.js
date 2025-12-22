const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
    {
        name : {
            type : String
        },
        position : {
            type : String
        }
    },
    { timestamps : true }
)

module.exports = mongoose.model("Player", PlayerSchema, "players");

