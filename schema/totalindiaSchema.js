const mongoose = require('mongoose');

const worlddataSchema = new mongoose.Schema({
    active: {
          type: String
      },
      confirmed: {
          type: String
      },
      deaths: {
          type:String
      },
      recovered: {
          type:String
      },
      lastupdatedtime: {
          type:String
      }
})

const worlddata = mongoose.model('totalindiadata', worlddataSchema);

module.exports = worlddata;