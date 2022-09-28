const Students = require("../models/students")
var ObjectID = require('mongodb').ObjectID;

module.exports = {
    index: (req, res) => {
        Students.find({}).then(Students => {
            res.json(Students)
        }).catch(error => {
            res.json({ error: error })
        })
    },
    show: (req, res) => {
        let studentId = new ObjectID(req.body.sID);


        Students.findById(studentId).then(Students => {
            res.json({ Students })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    update: (req, res) => {

        let studentId = req.body.sID
        let studnetInfo = {
            First_name: req.body.firstname,
            Last_name: req.body.lastname,
            Phone_number: req.body.phonenumber,
            SerialId: req.body.serialid,
            licens_type: req.body.licenstype,

        }
        Students.findByIdAndUpdate(studentId, { $set: studnetInfo }).then(post => {
            res.json({ message: "Student information updated" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    delete: (req, res) => {
        let studentId = req.body.sID
        Students.findByIdAndRemove(studentId).then(() => {
            res.json({ message: "Student Is deleted" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    create: (req, res) => {
        let studnet = new Students({
            First_name: req.body.firstname,
            Last_name: req.body.lastname,
            Phone_number: req.body.phonenumber,
            SerialId: req.body.serialid,
            licens_type: req.body.licenstype,
        })
        studnet.save((error) => {
            if (error)
                res.json({ error: error })
            else {
                res.json({ message: "Studnet Added" })
            }
        })
    }
}