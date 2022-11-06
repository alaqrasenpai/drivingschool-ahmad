const mongoose = require("mongoose"),
    { Schema } = mongoose

const AnswersCollection = new Schema({
    ANSWER_ID: {
        type: String,
        required: true,
        trim: true,
    },
    ANSWER_DATA: {
        type: String,
        required: true
    },
    audio_url: {
        type: String
    },
    QUASTION_ID: {
        type: String
    },
    STATUS: {
        type: Number,
        required: true
    }

})
const QuastionsCollectiom = new Schema({
    QUASTION_ID: {
        type: String,
        required: true,
    },
    QUASTION_DATA: {
        type: String,

    },
    PHOTO_URL: {
        type: String
    },
    audio_url: {
        type: String
    },
    licens_type: {
        type: String
    },
    Answers: [AnswersCollection]
})

const ExamSchema = new Schema({
    ID: {
        type: Number
    },
    uid: {
        type: mongoose.Schema.Types.ObjectId,

        required: true
    },
    quastions: [QuastionsCollectiom],
    grade: {
        type: Number
    },
    timetaken: {
        type: Number
    },
    createDate: {
        type: Date
    }


})

module.exports = mongoose.model("Exam", ExamSchema)