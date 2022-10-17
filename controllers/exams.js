const Exam = require("../models/exam")
var ObjectID = require('mongodb').ObjectID;


module.exports = {
    index: (req, res) => {
        Exam.find({}).then(Exam => {
            res.json(Exam)
        }).catch(error => {
            res.json({ error: error })
        })
    },
    count: (req, res) => {
        Exam.find({}).then(Exam => {
            res.json({ "Count": Exam.length })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    show: (req, res) => {
        let examID = req.body.eID
        let objId = new ObjectID(examID);
        Exam.find(objId).then(Exam => {
            res.json({ Exam })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    showByUserId: (req, res) => {
        let userID = req.body.uID
        let objId = new ObjectID(userID);
        Exam.findById({ UserId: objId }).then(Exam => {
            res.json({ Exam })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    update: (req, res) => {

        let answerID = req.body.aid
        let answerInfo = {
            ANSWER_DATA: req.body.DATA,
            QUASTION_ID: req.body.QUASTION_ID,
            audio_url: req.body.audio_url,
            STATUS: req.body.STATUS,
            // updateDate: Date.now()
        }
        Exam.findByIdAndUpdate(answerID, { $set: answerInfo }).then(post => {
            res.json({ message: "Answer information updated" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    delete: (req, res) => {
        let examId = req.body.eid
        Exam.findByIdAndRemove(examId).then(() => {
            res.json({ message: "Exam Is deleted" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    create: (req, res) => {
        let answer = new Answer({
            ANSWER_DATA: req.body.DATA,
            QUASTION_ID: req.body.QUASTION_ID,
            audio_url: req.body.audio_url,
            STATUS: req.body.STATUS,
            // createDate: Date.now(),
            // updateDate: Date.now()
        })
        answer.save((error) => {
            if (error)
                res.json({ error: error })
            else {
                res.json({ message: "Answer Added" })
            }
        })
    },
    showByQuastionId: (req, res) => {
        let qID = req.body.qid
        Answer.find({ QUASTION_ID: qID }).then(Answer => {
            res.json(Answer)
        }).catch(error => {
            res.json({ error: error })
        })
    }
}