const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    mobile:{
        type:String,
        unique:true,
        required:[true,'account without mobile number is not valid']
    },
    state:{
        type:String
    },
    address1:{
        type:String
    },
    address2:{
        type:String
    },
    district:{
        type:String
    },
    password:{
        type:String
    },
    status:{
        type:String,
        default:'not registered'
    },
    createdAt:{
        type:Date,
        default:Date.now()
        
    }
});

userSchema.pre('save', async function(next) {
    this.createdAt = Date.now();
    next();
  });

//   userSchema.post('save', function(error, res, next) {
//     if (error.name === 'MongoError' && error.code === 11000) {
//       next(new Error('There is already an account with this email or phone'));
//     } else {
//       next();
//     }
//   });
 
  
const newuser = mongoose.model('users',userSchema);

module.exports = newuser;