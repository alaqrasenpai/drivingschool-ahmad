const Trainer = require("../models/trainers");
var ObjectID = require('mongodb').ObjectID;

module.exports = {
    index: (req, res) => {
        Trainer.find({}, (error, trainers) => {
            if (error) console.log(`ther was an error :${error}`)
            else {
                res.render("Trainers.ejs", { trainers: trainers });
            }
        })
    },
    show: (req, res) => {
        let trianerId = new ObjectID(req.body.tID);


        Trainer.findById(trianerId).then(Trainer => {
            res.json({ Trainer })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    update: (req, res) => {

        let trainerID = req.body.tid
        let trainerInfo = {
            First_name: req.body.First_name,
            Last_name: req.body.Last_name,
            username: req.body.username,
            password: req.body.password,
            Phone_number: req.body.Phone_number,
            RULE: req.body.RULE
                // updateDate: Date.now()
        }
        Trainer.findByIdAndUpdate(trainerID, { $set: trainerInfo }).then(post => {
            res.json({ message: "Trainer information updated" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    delete: (req, res) => {
        let trainerID = req.body.tid
        Trainer.findByIdAndRemove(trainerID).then(() => {
            res.json({ message: "trainer Is deleted" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    create: (req, res) => {
        let trainer = new Trainer({
            First_name: req.body.First_name,
            Last_name: req.body.Last_name,
            username: req.body.username,
            password: req.body.password,
            Phone_number: req.body.Phone_number,
            RULE: req.body.RULE
        })
        trainer.save((error) => {
            if (error)
                res.json({ error: error })
            else {
                res.json({ message: "Trainer Added" })
            }
        })
    },
}