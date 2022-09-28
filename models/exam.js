const mongoose = require("mongoose"),
    { Schema } = mongoose
const QuastionsCollectiom = new Schema({
    QUASTION_ID: {
        type: Number,
        required: true,
    },
    Answers: [AnswersCollection]
})
const AnswersCollection = new Schema({
    ANSWER_ID: {
        type: Number,
        required: true,
        trim: true,
    },
    STATUS: {
        type: Number,
        required: true
    }

})
const ExamSchema = new Schema({
    ID: {
        type: Number
    },
    UserId: {
        type: Number,
        AnswersCollection: [
            quastions
        ],
        required: true
    },
    QUASTIONS: [QuastionsCollectiom]


})

module.exports = mongoose.model("Exam", ExamSchema)