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
    getAllStudents: (req, res) => {
        Students.find({ is_student: 1 }).then(Students => {
            res.json(Students)
        }).catch(error => {
            res.json({ error: error })
        })
    },
    getAllGuests: (req, res) => {
        Students.find({ is_student: 0 }).then(Students => {
            res.json(Students)
        }).catch(error => {
            res.json({ error: error })
        })
    },
    count: (req, res) => {
        Students.find({}).then(Students => {
            res.json({ "Count": Students.length })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    countguests: (req, res) => {
        Students.find({ is_student: 0 }).then(Students => {
            res.json({ "Count": Students.length })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    countstudents: (req, res) => {
        Students.find({ is_student: 1 }).then(Students => {
            res.json({ "Count": Students.length })
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
    showstudent: (req, res) => {
        Students.find({ is_student: 1 }).then(Students => {
            res.json(Students)
        }).catch(error => {
            res.json({ error: error })
        })
    },
    showguests: (req, res) => {
        Students.find({ is_student: 0 }).then(Students => {
            res.json(Students)
        }).catch(error => {
            res.json({ error: error })
        })
    },
    update: (req, res) => {
        let sID = req.body.serialid
        let objId = new ObjectID(sID);

        let studentId = req.body.sID
        let studnetInfo = {
            First_name: req.body.firstname,
            Last_name: req.body.lastname,
            Phone_number: req.body.phonenumber,
            SerialId: objId,
            licens_type: req.body.licenstype,
            is_student: req.body.isstudent


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
        let sID = req.body.serialid
        let objId = new ObjectID(sID);

        let studnet = new Students({
            First_name: req.body.firstname,
            Last_name: req.body.lastname,
            Phone_number: req.body.phonenumber,
            SerialId: objId,
            licens_type: req.body.licenstype,
            is_student: req.body.isstudent
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