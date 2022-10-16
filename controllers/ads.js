const Ads = require("../models/ads")
var ObjectID = require('mongodb').ObjectID;


module.exports = {
    index: (req, res) => {
        Ads.find({}).then(Answer => {
            res.json(Answer)
        }).catch(error => {
            res.json({ error: error })
        })
    },
    show: (req, res) => {
        let adsID = req.body.aID
        Ads.findById(adsID).then(Ads => {
            res.json({ Ads })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    show_byOwner: (req, res) => {
        let owner_ID = req.body.admin_id;
        let objId = new ObjectID(owner_ID);

        Ads.find({ "ad_admin": objId }).then(Ads => {
            res.json({ Ads })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    count: (req, res) => {

        Ads.find({}).then(Ads => {
            res.json({ "number": Ads.count })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    update: (req, res) => {

        let adsID = req.body.aID
        let objId = new ObjectID(adsID);

        let adInfo = {
            Ad_title: req.body.title,
            ad_info: req.body.info,
            ad_image: req.body.img,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            ad_owner: req.body.owner_name,
            ad_admin: req.body.admin_id
                // updateDate: Date.now()
        }
        Ads.findByIdAndUpdate(objId, { $set: adInfo }).then(post => {
            res.json({ message: "Ad information updated" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    delete: (req, res) => {
        let adId = req.body.aid
        Ads.findByIdAndRemove(adId).then(() => {
            res.json({ message: "Ad Is deleted" })
        }).catch(error => {
            res.json({ error: error })
        })
    },
    create: (req, res) => {
        let ad = new Ads({
            Ad_title: req.body.title,
            ad_info: req.body.info,
            ad_image: req.body.img,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            ad_owner: req.body.owner_name,
            ad_admin: req.body.admin_id
        })
        ad.save((error) => {
            if (error)
                res.json({ error: error })
            else {
                res.json({ message: "ad Added" })
            }
        })
    }
}