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
    indexMini: (req, res) => {
        Exam.find({}, { uid: 1, grade: 1, timetaken: 1 }).then(Exam => {
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
        Exam.findById(req.body.eID).then(Exam => {
            res.json({ Exam })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    showMini: (req, res) => {
        Exam.findById(req.body.eID, { uid: 1, grade: 1, timetaken: 1 }).then(Exam => {
            res.json({ Exam })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    showByUserId: (req, res) => {
        let userID = req.body.uID
        console.log(userID);
        let objId = new ObjectID(userID);
        Exam.find({ UserId: objId }).then(Exam => {
            res.json(Exam)
        }).catch(error => {
            res.json({ error: error })
        })
    },
    showByUserIdMini: (req, res) => {
        let userID = req.body.uID
        let objId = new ObjectID(userID);
        Exam.find({ UserId: userID }, { uid: 1, grade: 1, timetaken: 1 }).then(Exam => {
            res.json(Exam)
        }).catch(error => {
            res.json({ error: error })
        })
    },
    update: (req, res) => {
        let questionID = req.body.qid


        var uid = req.body.uid;
        var grade = req.body.grade;
        var timetaken = req.body.timetaken;
        var questionsGroup = [];
        for (var i = 0; i < req.body.quastions.length; i++) {
            var answersGroup = [];

            for (var j = 0; j < req.body.quastions[i].Answers.length; j++) {
                answersGroup.push(
                    new Object({
                        ANSWER_ID: req.body.quastions[i].Answers[j].ANSWER_ID,
                        ANSWER_DATA: req.body.quastions[i].Answers[j].ANSWER_DATA,
                        audio_url: req.body.quastions[i].Answers[j].audio_url,
                        QUASTION_ID: req.body.quastions[i].Answers[j].QUASTION_ID,
                        STATUS: req.body.quastions[i].Answers[j].status
                    })
                )
            }
            var currentQuestion = new Object({
                QUASTION_ID: req.body.quastions[i].QUASTION_ID,
                QUASTION_DATA: req.body.quastions[i].QUASTION_DATA,
                PHOTO_URL: req.body.quastions[i].PHOTO_URL,
                audio_url: req.body.quastions[i].audio_url,
                licens_type: req.body.quastions[i].licens_type,
                Answers: answersGroup
            });

            questionsGroup.push(currentQuestion);
        }


        let examInfo = {
            uid: uid,
            quastions: questionsGroup,
            grade: grade,
            timetaken: timetaken,
            // updateDate: Date.now()
        }
        Exam.findByIdAndUpdate(questionID, { $set: examInfo }).then(post => {
            res.json({ message: "question information updated" })
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



        var uid = req.body.uid;
        var grade = req.body.grade;
        var timetaken = req.body.timetaken;
        var questionsGroup = [];
        for (var i = 0; i < req.body.quastions.length; i++) {
            var answersGroup = [];

            for (var j = 0; j < req.body.quastions[i].Answers.length; j++) {
                answersGroup.push(
                    new Object({
                        ANSWER_ID: req.body.quastions[i].Answers[j].ANSWER_ID,
                        ANSWER_DATA: req.body.quastions[i].Answers[j].ANSWER_DATA,
                        audio_url: req.body.quastions[i].Answers[j].audio_url,
                        QUASTION_ID: req.body.quastions[i].Answers[j].QUASTION_ID,
                        STATUS: req.body.quastions[i].Answers[j].STATUS
                    })
                )
            }
            var currentQuestion = new Object({
                QUASTION_ID: req.body.quastions[i].QUASTION_ID,
                QUASTION_DATA: req.body.quastions[i].QUASTION_DATA,
                PHOTO_URL: req.body.quastions[i].PHOTO_URL,
                audio_url: req.body.quastions[i].audio_url,
                licens_type: req.body.quastions[i].licens_type,
                Answers: answersGroup
            });

            questionsGroup.push(currentQuestion);
        }
        let exam = new Exam({
            uid: uid,
            quastions: questionsGroup,
            grade: grade,
            timetaken: timetaken,
            createDate: Date.now(),
            // updateDate: Date.now()
        })
        exam.save((error) => {
            if (error)
                res.json({ error: error })
            else {
                res.json({ message: "exam Added" })
            }
        })
    }

}