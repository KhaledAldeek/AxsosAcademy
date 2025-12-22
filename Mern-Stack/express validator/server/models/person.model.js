const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
    {
        name : {
            type:String,
            required : [true, "Name is Required"],
            minLength : [2, "Name must be at least 2 chars"]
        }
    },
    { timestamps : true }
);

module.exports = mongoose.model("Person", PersonSchema);