const mongoose = require("mongoose"),
    { Schema } = mongoose

const SerialtSchema = new Schema({
    ID: {
        type: Number
    },
    serialkey: {
        type: String,
        trim: true,
        required: true
    },
    status: {
        type: String,
        trim: true,
        required: true
    },
    end_date: {
        type: Date,
        trim: true,
        required: true
    },


    licens_type: {
        type: Number,
        trim: true,
        required: true
    }


})

module.exports = mongoose.model("Serial", SerialtSchema)