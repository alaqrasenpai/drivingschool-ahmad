const mongoose = require("mongoose"),
    { Schema } = mongoose

const QuastiontSchema = new Schema({
    ID: {
        type: Number
    },
    QUASTION_DATA: {
        type: String,
        trim: true,
        required: true
    },
    PHOTO_URL: {
        type: String,
        trim: true
    },
    audio_url: {
        type: String,
        trim: true
    },
    licens_type: {
        type: String,
        trim: true,
        required: true
    }


})

module.exports = mongoose.model("Quastion", QuastiontSchema)