const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto');

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
        
    },
    token:{
        type:String
    },
    passwordResetToken: String,
    passwordResetExpires: Date
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
 

userSchema.methods.createPasswordResetToken = function() {
    const resetToken = crypto.randomBytes(32).toString('hex');
  
    this.passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
  
    //console.log({ resetToken }, this.passwordResetToken);
  
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  
    return resetToken;
  };

  
const newuser = mongoose.model('users',userSchema);

module.exports = newuser;