const mongoose = require("mongoose"),
    { Schema } = mongoose

const TutorialSchema = new Schema({

    tutorial_title: {
        type: String,
        trim: true,
        required: true
    },
    tutorial_img: {
        type: String,
        trim: true
    },
    tutorial_info: {
        type: String,
        trim: true
    }

})

module.exports = mongoose.model("Tutorial", TutorialSchema)