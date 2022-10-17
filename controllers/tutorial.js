const Tutorial = require("../models/tutorial")
var ObjectID = require('mongodb').ObjectID;


module.exports = {
    index: (req, res) => {
        Tutorial.find({}).then(Tutorial => {
            res.json(Tutorial)
        }).catch(error => {
            res.json({ error: error })
        })
    },
    count: (req, res) => {
        Tutorial.find({}).then(Tutorial => {
            res.json({ "Count": Tutorial.length })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    show: (req, res) => {
        let tutorialId = req.body.tid;


        Tutorial.findById(tutorialId).then(Tutorial => {
            res.json({ Tutorial })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    update: (req, res) => {

        let tutorialId = req.body.tid
        let tutorialInfo = {
            tutorial_title: req.body.title,
            tutorial_img: req.body.img,
            tutorial_info: req.body.info
        }
        Tutorial.findByIdAndUpdate(tutorialId, { $set: tutorialInfo }).then(post => {
            res.json({ message: "Tutorial information updated" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    delete: (req, res) => {
        let tutorialId = req.body.tid
        Tutorial.findByIdAndRemove(tutorialId).then(() => {
            res.json({ message: "Tutorial Is deleted" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    create: (req, res) => {
        let tutorial = new Tutorial({
            tutorial_title: req.body.title,
            tutorial_img: req.body.img,
            tutorial_info: req.body.info
                // createDate: Date.now(),
                // updateDate: Date.now()
        })
        tutorial.save((error) => {
            if (error)
                res.json({ error: error })
            else {
                res.json({ message: "Tutorial Added" })
            }
        })
    }
}