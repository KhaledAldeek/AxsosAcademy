const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "firstName field is required."],
            minlength: [2, "firstName must be at least 2 chars."],
            trim: true,
        },

        lastName: {
            type: String,
            required: [true, "lastName field is required."],
            minlength: [2, "lastName must be at least 2 chars."],
            trim: true,
        },

        email: {
            type: String,
            required: [true, "email field is required."],
            trim: true,
            lowercase: true,
            match: [
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                "please enter a valid email address.",
            ],
        },

        dateOfBirth: {
            type: Date,
            required: [true, "dateOfBirth field is required."],
            validate: {
                validator: function (v) {
                    return v instanceof Date && !isNaN(v.getTime()) && v <= new Date();
                },
                message: "dateOfBirth must be in the past.",
            },
        },

        password: {
            type: String,
            required: [true, "password field is required."],
            minlength: [8, "password must be at least 8 chars."],
            select: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema, "users");
