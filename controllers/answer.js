const Answer = require("../models/answer")
var ObjectID = require('mongodb').ObjectID;


module.exports = {
    index: (req, res) => {
        Answer.find({}).then(Answer => {
            res.json(Answer)
        }).catch(error => {
            res.json({ error: error })
        })
    },
    count: (req, res) => {
        Answer.find({}).then(Answer => {
            res.json({ "Count": Answer.count })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    show: (req, res) => {
        let answerID = req.body.aID
        let objId = new ObjectID(answerID);
        Answer.findById(objId).then(Answer => {
            res.json({ Answer })
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
        Answer.findByIdAndUpdate(answerID, { $set: answerInfo }).then(post => {
            res.json({ message: "Answer information updated" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    delete: (req, res) => {
        let answerID = req.body.aid
        Answer.findByIdAndRemove(answerID).then(() => {
            res.json({ message: "answer Is deleted" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    create: (req, res) => {
        console.log("test");
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