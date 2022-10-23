const Serial = require("../models/serials")
var ObjectID = require('mongodb').ObjectID;
var endOfDay = 'date-fns/endOfDay'


module.exports = {
    index: (req, res) => {
        Serial.find({}).then(Serial => {
            res.json(Serial)
        }).catch(error => {
            res.json({ error: error })
        })
    },
    count: (req, res) => {
        Serial.find({}).then(Serial => {
            res.json({ "Count": Serial.length })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    getbykey: (req, res) => {
        Serial.find({
            serialkey: {
                $eq: req.body.sKey
            }
        }).then(Serial => {
            res.json(Serial)
        }).catch(error => {
            res.json({ error: error })
        })
    },
    showWithUser: (req, res) => {
        // let quastionId = new ObjectID(req.body.qid);
        // console.log("hello world");
        Serial.aggregate([{
            $lookup: {
                from: "students",
                localField: "_id",
                foreignField: "SerialId",
                as: "serial_users"
            }
        }]).exec(function(err, r) {
            res.json(r);
        })

    },
    showByUserID: (req, res) => {
        let userID = new ObjectID(req.body.uid);
        console.log(userID);
        Serial.aggregate([{
            $lookup: {
                from: "students",
                localField: "_id",
                foreignField: "SerialId",
                as: "serial_users"
            }
        }]).exec(function(err, r) {
            res.json(r.filter(x => x.serial_users[0]._id == req.body.uid));
        })

    },
    showUserByKey: (req, res) => {
        let serialKey = req.body.skey;
        // console.log("hello world");
        Serial.aggregate([{
            $lookup: {
                from: "students",
                localField: "_id",
                foreignField: "SerialId",
                as: "serial_users"
            }
        }]).exec(function(err, r) {
            res.json(r.filter(x => x.serialkey === serialKey));
        })

    },
    show: (req, res) => {
        let serialID = new ObjectID(req.body.sID);
        Serial.findById(serialID).then(Serial => {
            res.json({ Serial })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    update: (req, res) => {

        let serialID = req.body.sID
        let serialInfo = {
            serialkey: req.body.serialkey,
            status: req.body.status,
            end_date: req.body.end_date,
            licens_type: req.body.licens_type,
            // updateDate: Date.now()
        }
        Serial.findByIdAndUpdate(serialID, { $set: serialInfo }).then(post => {
            res.json({ message: "Serial information updated" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    delete: (req, res) => {
        let serialID = req.body.sID
        Serial.findByIdAndRemove(serialID).then(() => {
            res.json({ message: "Serial Is deleted" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    create: (req, res) => {
        let serial = new Serial({
            serialkey: req.body.serialkey,
            status: req.body.status,
            end_date: req.body.end_date,
            licens_type: req.body.licens_type,
            // createDate: Date.now(),
            // updateDate: Date.now()
        })
        serial.save((error) => {
            if (error)
                res.json({ error: error })
            else {
                res.json({ message: "serial Added" })
            }
        })
    }
}