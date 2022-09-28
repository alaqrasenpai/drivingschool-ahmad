const mongoose = require("mongoose"),
    { Schema } = mongoose

const TrainerSchema = new Schema({
    ID: {
        type: Number
    },
    First_name: {
        type: String,
        trim: true,
        required: true
    },
    Last_name: {
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    Phone_number: {
        type: String,
        trim: true,
        required: true
    },


    RULE: {
        type: Number,
        trim: true,
        required: true
    }


})

module.exports = mongoose.model("Trainer", TrainerSchema)