const mongoose = require("mongoose"),
    { Schema } = mongoose

const AdsSchema = new Schema({

    Ad_title: {
        type: String,
        trim: true,
        required: true
    },
    ad_info: {
        type: String,
        trim: true,
        required: true
    },
    ad_image: {
        type: String,
        trim: true,
        required: true
    },
    start_date: {
        type: Date,
        trim: true,
        required: true
    },
    end_date: {
        type: Date,
        trim: true,
        required: true
    },


    ad_owner: {
        type: String,
        trim: true,
        required: true
    },
    ad_admin: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }


})

module.exports = mongoose.model("Ads", AdsSchema)