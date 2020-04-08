const mongoose = require('mongoose');

const statedataSchema = new mongoose.Schema({
            dailyconfirmed: {
                type:String
            },
            dailydeceased: {
                type:String
            },
            dailyrecovered: {
                type:String
            },
            date: {
                type:String
            },
            totalconfirmed: {
                type:String
            },
            totaldeceased: {
                type:String
            },
            totalrecovered: {
                type:String
            }
        });


const timelinedata = mongoose.model('timelinedata', statedataSchema);

module.exports = timelinedata;