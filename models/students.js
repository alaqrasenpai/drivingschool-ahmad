const mongoose = require("mongoose"),
    { Schema } = mongoose

const StudentSchema = new Schema({
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
    Phone_number: {
        type: String,
        trim: true,
        required: true
    },
    ID: {
        type: Number
    },
    SerialId: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true
    },

    licens_type: {
        type: Number,
        trim: true,
        required: true
    }


})

module.exports = mongoose.model("Student", StudentSchema)