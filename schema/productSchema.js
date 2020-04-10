const mongoose = require('mongoose');

const pruductSchema = new mongoose.Schema({
    name:{
        type:String
    },
    mobileno:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    state:{
        type:String
    },
    district:{
        type:String
    },
    order_item:{
        type:Array
    },
    quantity:{
        type:Array
    },
    status:{
        type:String,
        default:'un booked'
    },
    shopkeeperid:{
        type:String,
        default: 'currently not booked'
    }
})


const product = mongoose.model('buydata', pruductSchema);

module.exports = product;