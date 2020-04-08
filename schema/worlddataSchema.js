const mongoose = require('mongoose');

const worlddataSchema = new mongoose.Schema({
      country_name: {
          type: String
      },
      cases: {
          type: String
      },
      deaths: {
          type:String
      },
      region: {
          type:String
      },
      total_recovered: {
          type:String
      },
      new_deaths: {
          type:String
      },
      new_cases: {
          type:String
      },
      serious_critical: {
          type:String
      },
      active_cases: {
          type:String
      },
      total_cases_per_1m_population: {
          type:String
      }
})

const worlddata = mongoose.model('worlddata', worlddataSchema);

module.exports = worlddata;