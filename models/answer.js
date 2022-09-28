const mongoose = require("mongoose"),
    { Schema } = mongoose

const AnswerSchema = new Schema({
    ID: {
        type: Number
    },
    ANSWER_DATA: {
        type: String,
        trim: true,
        required: true
    },
    QUASTION_ID: {
        type: Number,
        trim: true,
        required: true
    },
    audio_url: {
        type: String,
        trim: true
    },
    STATUS: {
        type: Number,
        trim: true,
        required: true
    }


})

module.exports = mongoose.model("Answer", AnswerSchema)