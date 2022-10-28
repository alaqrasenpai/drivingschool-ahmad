const mongoose = require("mongoose"),
    { Schema } = mongoose

const AnswersCollection = new Schema({
    ANSWER_ID: {
        type: String,
        required: true,
        trim: true,
    },
    ANSWER_TEXT: {
        type: String,
        required: true
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
    QUASTION_TEXT: {
        type: String,

    },
    Answers: [AnswersCollection]
})

const ExamSchema = new Schema({
    ID: {
        type: Number
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,

        required: true
    },
    QUASTIONS: [QuastionsCollectiom],
    Grade: {
        type: Number
    },
    TimeTaken: {
        type: Number
    },
    createDate: {
        type: Date
    }


})

module.exports = mongoose.model("Exam", ExamSchema)