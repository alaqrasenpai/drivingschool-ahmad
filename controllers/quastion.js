const Quastion = require("../models/quastion")
var ObjectID = require('mongodb').ObjectID;


module.exports = {
    index: (req, res) => {
        Quastion.find({}).then(Quastion => {
            res.json(Quastion)
        }).catch(error => {
            res.json({ error: error })
        })
    },
    show: (req, res) => {
        let quastionId = new ObjectID(req.body.qid);


        Quastion.findById(quastionId).then(Quastion => {
            res.json({ Quastion })
        }).catch(error => {
            res.json({ error: error })
        })
    },

    showWithAnswers: (req, res) => {
        // let quastionId = new ObjectID(req.body.qid);
        console.log("hello world");
        Quastion.aggregate([{
            $lookup: {
                from: "answers",
                localField: "_id",
                foreignField: "QUASTION_ID",
                as: "quastion_answers"
            }
        }]).exec(function(err, r) {
            res.json({ data: r });
        })

    },

    update: (req, res) => {

        let quastionID = req.body.qid
        let quastionInfo = {
            QUASTION_DATA: req.body.DATA,
            PHOTO_URL: req.body.PHOTO_URL,
            audio_url: req.body.audio_url,
            licens_type: req.body.licens_type,
            // updateDate: Date.now()
        }
        Quastion.findByIdAndUpdate(quastionID, { $set: quastionInfo }).then(post => {
            res.json({ message: "quastion information updated" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    delete: (req, res) => {
        let quastionID = req.body.qid
        Quastion.findByIdAndRemove(quastionID).then(() => {
            res.json({ message: "quastion Is deleted" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    create: (req, res) => {
        let quastion = new Quastion({
            QUASTION_DATA: req.body.DATA,
            PHOTO_URL: req.body.PHOTO_URL,
            audio_url: req.body.audio_url,
            licens_type: req.body.licens_type,
            // createDate: Date.now(),
            // updateDate: Date.now()
        })
        quastion.save((error) => {
            if (error)
                res.json({ error: error })
            else {
                res.json({ message: "quastion Added" })
            }
        })
    }
}