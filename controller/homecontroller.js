const totalindia = require('../schema/totalindiaSchema');
const statedata = require('../schema/statedataSchema');
const worlddata = require('../schema/worlddataSchema');
const user = require('../schema/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
var nodemailer = require('nodemailer');
const buyproduct = require('../schema/productSchema');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: process.env.email,
         pass: process.env.password
     }
 });


const signToken = id => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN
	});
};


exports.cover = async (req, res) => {
	try {
		res.render('cover');
	}
	catch (err) {
		res.send(err);
	}
}


exports.getlivestat = async (req, res) => {
	try {
		var statewise = [];

		const totalindia_data = await totalindia.findOne();
		const countrywise = await worlddata.find();

		statewise.push(await statedata.Maharashtra.findOne());
		statewise.push(await statedata.Tamil_Nadu.findOne());
		statewise.push(await statedata.Delhi.findOne());
		statewise.push(await statedata.Kerala.findOne());
		statewise.push(await statedata.Uttar_Pradesh.findOne());
		statewise.push(await statedata.Andhra_Pradesh.findOne());
		statewise.push(await statedata.Rajasthan.findOne());
		statewise.push(await statedata.Telangana.findOne());
		statewise.push(await statedata.Karnataka.findOne());
		statewise.push(await statedata.Madhya_Pradesh.findOne());
		statewise.push(await statedata.Gujarat.findOne());
		//statewise.push(await statedata.Jammu_Kashmir.findOne());
		statewise.push(await statedata.Haryana.findOne());
		statewise.push(await statedata.West_Bengal.findOne());
		statewise.push(await statedata.Punjab.findOne());
		statewise.push(await statedata.Bihar.findOne());
		statewise.push(await statedata.Chandigarh.findOne());
		statewise.push(await statedata.Assam.findOne());
		statewise.push(await statedata.Ladakh.findOne());
		statewise.push(await statedata.Andaman_Nicobar.findOne());
		statewise.push(await statedata.Uttarakhand.findOne());
		statewise.push(await statedata.Chhattisgarh.findOne());
		statewise.push(await statedata.Goa.findOne());
		statewise.push(await statedata.Himachal_Pradesh.findOne());
		statewise.push(await statedata.Odisha.findOne());
		statewise.push(await statedata.Puducherry.findOne());
		statewise.push(await statedata.Jharkhand.findOne());
		statewise.push(await statedata.Manipur.findOne());
		statewise.push(await statedata.Mizoram.findOne());
		statewise.push(await statedata.Arunachal_Pradesh.findOne());
		statewise.push(await statedata.Dadra_Nagar_Haveli.findOne());
		statewise.push(await statedata.Daman_Diu.findOne());
		statewise.push(await statedata.Lakshadweep.findOne());
		statewise.push(await statedata.Meghalaya.findOne());
		statewise.push(await statedata.Nagaland.findOne());
		statewise.push(await statedata.Sikkim.findOne());
		statewise.push(await statedata.Tripura.findOne());

		//console.log(countrywise);
		res.render("livedata", { totalindia_data: totalindia_data, statewise: statewise, countrywise: countrywise });

	}
	catch (err) {
		res.send(err);
	}

}

exports.gettotal = async (re, res) => {
	try {
		const totalindia_data = await totalindia.findOne();
		res.send(totalindia_data);
	}
	catch (err) {
		res.send(err);
	}
}

exports.getpage = async (req, res) => {
	try {
		res.render('home');
	}
	catch (err) {
		res.send(err);
	}

}

exports.hospitals = async (req, res) => {
	try {
		res.render('hospitals',{key:process.env.map_key});
	}
	catch (err) {
		res.send(err);
	}
}

exports.helpline = async (req, res) => {
	try {
		res.render('helpline');
	}
	catch (err) {
		res.send(err);
	}
}

exports.logincheck = async (req, res) => {
	try {
		var email = req.body.email;
		var password = req.body.password;

		const loginuser = await user.findOne({ email });
		if (!loginuser) { res.send({ status: "fail", message: 'wrong email or password', stat: '-1' }); }
		else {
			const ch = await bcrypt.compare(password, loginuser.password);
			if (ch == false) { res.send({ status: "fail", message: 'wrong email or password', stat: '-1' }); }
			else {
				const token = signToken(loginuser._id);
				res.send({ status: "success", email: loginuser.email, token: token });

			}
		}
	}
	catch (err) { res.send({ stat: 500, err }); }
}

exports.signup = async (req, res) => {
	try {
		res.render('signup');
	}
	catch (err) {
		res.send(err);
	}
}



exports.signup_post = async (req, res) => {
	try {
		const obj = req.body;
		obj.password = await bcrypt.hash(obj.password, 12);
		const new_user = await user.create(obj);

		const resetToken = new_user.createPasswordResetToken();
		await new_user.save({ validateBeforeSave: false });
		const resetURL = `${req.protocol}://${req.get('host')}/users/verifyemail/${resetToken}`;
		const mailOptions = {
		   from: process.env.email,
		   to: new_user.email,
		   subject: 'Covidcare.com Email verification',
		   html: `<a href="${resetURL}" >${resetURL}</a>`
		 };
		 transporter.sendMail(mailOptions, function (err, info) {
		   if(err)
			 res.send({stat:"404",message:"Currentl unable to signup"});
		});

   	    res.send({stat:'200',message:'please check your email to verify email'});
	}
	catch (err) {
		res.send({
			status: "fail",
			message: err,
			stat: 500
		});
	}
}

exports.verifyemail = async(req,res)=>{
	try{
		const hashedToken = crypto
		.createHash('sha256')
	    .update(req.params.token)
		.digest('hex');
		const User = await user.findOne({passwordResetToken: hashedToken});

		if(!User){
			res.send('<html><head><title>Email verification</title></head><body bgcolor="white"><center><h1>Email not veified</h1></center><hr><center>covid19pr.com</center></body></html>');
		}
		else{
			User.status = "registered";
			User.passwordResetToken = undefined;
			User.passwordResetExpires = undefined;
			await User.save();			  
			res.send('<html><head><title>Email verification</title></head><body bgcolor="white"><center><h1>Email veified</h1></center><hr><center>covid19pr.com</center></body></html>');
		}
	}
	catch(err){
		res.send('<html><head><title>Email verification</title></head><body bgcolor="white"><center><h1>Email not veified</h1></center><hr><center>covid19pr.com</center></body></html>');	}
}

exports.tokencheck = async (req, res) => {
	try {
		const decoded = (jwt.verify)(req.body.token, process.env.JWT_SECRET);
		const currentUser = await user.findById(decoded.id);

		if (!currentUser) { res.send('404'); }
		else { res.send({ stat: '200', currentUser: currentUser }); }

	}
	catch (err) {
		console.log(err);
		res.send({ stat: 505, message: 'session expired' })
	}
}


exports.forgotpassword = async(req,res)=>{
	try{
		const email = req.body.email;
		const User = await user.findOne({ email: email });

		if(!User){
			res.send({stat:'404',message:'please enter correct email'});
		}
		else if(User.status == "not registered")
		{
			res.send({stat:'404',message:'you have not verified your email.'});
		}
		else{
		 const resetToken = User.createPasswordResetToken();
         await User.save({ validateBeforeSave: false });
		 const resetURL = `${req.protocol}://${req.get('host')}/users/resetPassword/${resetToken}`;
		 const mailOptions = {
			from: process.env.email,
			to: User.email,
			subject: 'Covidcare.com password change request',
			html: `<a href="${resetURL}" >${resetURL}</a>`
		  };
		  transporter.sendMail(mailOptions, function (err, info) {
			if(err)
			  res.send({stat:"404",message:"Currentl unable to change password"});
		 });
		res.send({stat:'200',message:'please check your email to change password'});
	   }
	}
	catch(err){
		res.send(err);
	}
}

exports.resetpassword = async(req,res)=>{
	try{

	const hashedToken = crypto
		.createHash('sha256')
	    .update(req.params.token)
		.digest('hex');
	
	const User = await user.findOne({passwordResetToken: hashedToken,passwordResetExpires: { $gt: Date.now() }});
	 res.render('forgotpassword',{User:User,token:req.params.token});
	}
	catch(err){
		res.send(err);
	}
}

exports.changepassword = async(req,res)=>{
	try{
		const hashedToken = crypto
		.createHash('sha256')
	    .update(req.params.token)
		.digest('hex');
		
		const User = await user.findOne({passwordResetToken: hashedToken,passwordResetExpires: { $gt: Date.now() }});
		User.password = await bcrypt.hash(req.body.password, 12);
		User.passwordResetToken = undefined;
  		User.passwordResetExpires = undefined;
  		await User.save();
		res.send('successfully changed password');
	}
	catch(err){
		res.send('err');
	}
}


exports.protector = async (req, res) => {
	try {
		const decoded = (jwt.verify)(req.body.token, process.env.JWT_SECRET);
		const currentUser = await user.findById(decoded.id);
		if (!currentUser) {console.log('ok'); res.send({stat : '200'}); }
		else {res.send({stat : '200'}); }
	}
	catch (err) {
		res.send(err);
	}
}

exports.buy = async(req,res)=>{
	try{
		const decoded = (jwt.verify)(req.params.token, process.env.JWT_SECRET);
		const currentUser =await user.findById(decoded.id);
		if(!currentUser){
			res.send('false');
		}
		else{
			res.send('true');
		}
	}
	catch(err){
		console.log(err);
		res.send(err);
	}
}

exports.buyertab = async(req,res)=>{
	try{
		res.render('buyer');
	}
	catch(err){
		res.send(err);
	}
}

exports.getinfo = async(req,res)=>{
	try{
		const token = req.body.token;
		const decoded = (jwt.verify)(token, process.env.JWT_SECRET);
		const currentUser =await user.findById(decoded.id);
		if(!currentUser){
			res.send({stat: '404'});
		}
		else{
			res.send({stat: '200',currentUser:currentUser});
		}

	}
	catch(err){
		console.log(err)
		res.send(err);
	}
}


exports.Itemform = async(req,res)=>{
	try{
		const obj = req.body;
	    const newbuyproduct = await buyproduct.create(obj);
		res.redirect('/');
	}
	catch(err){

		res.send(err);
	}
}


exports.sellertab = async(req,res)=>{
	try{
		res.render('sell');
	}
	catch(err){
		res.send(err);
	}
}

exports.getdataofproduct = async(req,res)=>{
	try{
		const token = req.body.token;
		const decoded = (jwt.verify)(token, process.env.JWT_SECRET);
		const currentUser =await user.findById(decoded.id);
		if(!currentUser){
			res.send({stat: '404'});
		}
		else{
			const allproduct = await buyproduct.find({state:currentUser.state,district:currentUser.district,status:'un booked'});
			res.send({stat: '200',allproduct:allproduct});
		}

	}
	catch(err){
		res.send(err);
	}
}

exports.bookproduct = async(req,res)=>{
	try{const email = req.body.email;
		const token = req.body.token;
		const id = (jwt.verify)(token, process.env.JWT_SECRET).id;
		const buyer =await buyproduct.findOne({email});
		buyer.status = "booked";
		buyer.shopkeeperid = id;
		await buyer.save();
		res.send({stat:200,message:'successfully booked'});
	}
	catch(err){
		console.log(err);
		res.send({stat:500,message:err});
	}
}