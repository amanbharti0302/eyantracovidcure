const totalindia = require('../schema/totalindiaSchema');
const statedata = require('../schema/statedataSchema');
const worlddata = require('../schema/worlddataSchema');
const user = require('../schema/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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
		res.render('hospitals');
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

		const token = signToken(new_user._id);

		res.send({
			status: "success",
			email: new_user.email,
			token: token
		});
	}
	catch (err) {
		res.send({
			status: "fail",
			message: err,
			stat: -1
		});
	}
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

exports.protector = async (req, res) => {
	try {
		const decoded = (jwt.verify)(req.body.token, process.env.JWT_SECRET);
		const currentUser = await user.findById(decoded.id);

		if (!currentUser) { console.log('hello'); res.send({ stat: 404 }); }
		else { res.send({ stat: 200, currentUser: currentUser }); }


	}
	catch (err) {
		res.send(err);
	}
}