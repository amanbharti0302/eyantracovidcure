const mongoose = require('mongoose');

const districtSchema = {
   name: String,
   notes: String,
   active: Number,
   confirmed: Number,
   deceased: Number,
   recovered: Number,
   delta: {
      confirmed: Number,
      deceased: Number,
      recovered: Number
   }
}

exports.district = mongoose.model('district', districtSchema);