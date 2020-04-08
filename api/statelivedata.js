const statedata = require('../schema/statedataSchema');
var totalindiadata = require('../schema/totalindiaSchema');
var unirest = require("unirest");

exports.writedata =function(){

	var req = unirest("GET", "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india");

req.headers({
	"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
	"x-rapidapi-key": "518dc8a1fdmshbc6babb05fb2828p1ef61ajsnbe5662797c2a"
});


req.end(async ( res)=> {
	try{
		var newindiadata =await totalindiadata.findOneAndUpdate(res.body.total_values);
	
		var Maharashtra = await statedata.Maharashtra.findOneAndUpdate(res.body.state_wise.Maharashtra);
		var Tamil_Nadu = await statedata.Tamil_Nadu.findOneAndUpdate(res.body.state_wise["Tamil Nadu"]);
		var Delhi = await statedata.Delhi.findOneAndUpdate(res.body.state_wise.Delhi);
		var Kerala = await statedata.Kerala.findOneAndUpdate(res.body.state_wise.Kerala);
		var Uttar_Pradesh = await statedata.Uttar_Pradesh.findOneAndUpdate(res.body.state_wise["Uttar Pradesh"]);
		var Andhra_Pradesh = await statedata.Andhra_Pradesh.findOneAndUpdate(res.body.state_wise["Andhra Pradesh"]);
		var Rajasthan = await statedata.Rajasthan.findOneAndUpdate(res.body.state_wise.Rajasthan);
		var Telangana = await statedata.Telangana.findOneAndUpdate(res.body.state_wise.Telangana);
		var Karnataka = await statedata.Karnataka.findOneAndUpdate(res.body.state_wise.Karnataka);
		var Madhya_Pradesh = await statedata.Madhya_Pradesh.findOneAndUpdate(res.body.state_wise["Madhya Pradesh"]);
		var Gujarat = await statedata.Gujarat.findOneAndUpdate(res.body.state_wise.Gujarat);
		//var Jammu_Kashmir = await statedata.Jammu_Kashmir.findOneAndUpdate(res.body.state_wise["Jammu and Kashmir"]);
		var Haryana = await statedata.Haryana.findOneAndUpdate(res.body.state_wise.Haryana);
		var West_Bengal = await statedata.West_Bengal.findOneAndUpdate(res.body.state_wise["West Bengal"]);
		var Punjab = await statedata.Punjab.findOneAndUpdate(res.body.state_wise.Punjab);
		var Bihar = await statedata.Bihar.findOneAndUpdate(res.body.state_wise.Bihar);
		var Chandigarh = await statedata.Chandigarh.findOneAndUpdate(res.body.state_wise.Chandigarh);
		var Assam = await statedata.Assam.findOneAndUpdate(res.body.state_wise.Assam);
		var Ladakh = await statedata.Ladakh.findOneAndUpdate(res.body.state_wise.Ladakh);
		var Andaman_Nicobar = await statedata.Andaman_Nicobar.findOneAndUpdate(res.body.state_wise["Andaman and Nicobar Islands"]);
		var Uttarakhand = await statedata.Uttarakhand.findOneAndUpdate(res.body.state_wise.Uttarakhand);
		var Chhattisgarh = await statedata.Chhattisgarh.findOneAndUpdate(res.body.state_wise.Chhattisgarh);
		var Goa = await statedata.Goa.findOneAndUpdate(res.body.state_wise.Goa);
		var Himachal_Pradesh = await statedata.Himachal_Pradesh.findOneAndUpdate(res.body.state_wise["Himachal Pradesh"]);
		var Odisha = await statedata.Odisha.findOneAndUpdate(res.body.state_wise.Odisha);
		var Puducherry = await statedata.Puducherry.findOneAndUpdate(res.body.state_wise.Puducherry);
		var Jharkhand = await statedata.Jharkhand.findOneAndUpdate(res.body.state_wise.Jharkhand);
		var Manipur = await statedata.Manipur.findOneAndUpdate(res.body.state_wise.Manipur);
		var Mizoram = await statedata.Mizoram.findOneAndUpdate(res.body.state_wise.Mizoram);
		var Arunachal_Pradesh = await statedata.Arunachal_Pradesh.findOneAndUpdate(res.body.state_wise["Arunachal Pradesh"]);
		var Dadra_Nagar_Haveli = await statedata.Dadra_Nagar_Haveli.findOneAndUpdate(res.body.state_wise["Dadra and Nagar Haveli"]);
		var Daman_Diu = await statedata.Daman_Diu.findOneAndUpdate(res.body.state_wise["Daman and Diu"]);
		var Lakshadweep = await statedata.Lakshadweep.findOneAndUpdate(res.body.state_wise.Lakshadweep);
		var Meghalaya = await statedata.Meghalaya.findOneAndUpdate(res.body.state_wise.Meghalaya);
		var Nagaland = await statedata.Nagaland.findOneAndUpdate(res.body.state_wise.Nagaland);
		var Sikkim = await statedata.Sikkim.findOneAndUpdate(res.body.state_wise.Sikkim);
		var Tripura = await statedata.Tripura.findOneAndUpdate(res.body.state_wise.Tripura);

		
	}catch(err){
		throw new Error(err);
	}
});

}




		// var Maharashtra = await statedata.Maharashtra.deleteMany();
		// var Tamil_Nadu = await statedata.Tamil_Nadu.deleteMany();
		// var Delhi = await statedata.Delhi.deleteMany();
		// var Kerala = await statedata.Kerala.deleteMany();
		// var Uttar_Pradesh = await statedata.Uttar_Pradesh.deleteMany();
		// var Andhra_Pradesh = await statedata.Andhra_Pradesh.deleteMany();
		// var Rajasthan = await statedata.Rajasthan.deleteMany();
		// var Telangana = await statedata.Telangana.deleteMany();
		// var Karnataka = await statedata.Karnataka.deleteMany();
		// var Madhya_Pradesh = await statedata.Madhya_Pradesh.deleteMany();
		// var Gujarat = await statedata.Gujarat.deleteMany();
		// var Jammu_Kashmir = await statedata.Jammu_Kashmir.deleteMany();
		// var Haryana = await statedata.Haryana.deleteMany();
		// var West_Bengal = await statedata.West_Bengal.deleteMany();
		// var Punjab = await statedata.Punjab.deleteMany();
		// var Bihar = await statedata.Bihar.deleteMany();
		// var Chandigarh = await statedata.Chandigarh.deleteMany();
		// var Assam = await statedata.Assam.deleteMany();
		// var Ladakh = await statedata.Ladakh.deleteMany();
		// var Andaman_Nicobar = await statedata.Andaman_Nicobar.deleteMany();
		// var Uttarakhand = await statedata.Uttarakhand.deleteMany();
		// var Chhattisgarh = await statedata.Chhattisgarh.deleteMany();
		// var Goa = await statedata.Goa.deleteMany();
		// var Himachal_Pradesh = await statedata.Himachal_Pradesh.deleteMany();
		// var Odisha = await statedata.Odisha.deleteMany();
		// var Puducherry = await statedata.Puducherry.deleteMany();
		// var Jharkhand = await statedata.Jharkhand.deleteMany();
		// var Manipur = await statedata.Manipur.deleteMany();
		// var Mizoram = await statedata.Mizoram.deleteMany();
		// var Arunachal_Pradesh = await statedata.Arunachal_Pradesh.deleteMany();
		// var Dadra_Nagar_Haveli = await statedata.Dadra_Nagar_Haveli.deleteMany();
		// var Daman_Diu = await statedata.Daman_Diu.deleteMany();
		// var Lakshadweep = await statedata.Lakshadweep.deleteMany();
		// var Meghalaya = await statedata.Meghalaya.deleteMany();
		// var Nagaland = await statedata.Nagaland.deleteMany();
		// var Sikkim = await statedata.Sikkim.deleteMany();
		// var Tripura = await statedata.Tripura.deleteMany();




		// Maharashtra = await statedata.Maharashtra.create(res.body.state_wise.Maharashtra);
		// Tamil_Nadu = await statedata.Tamil_Nadu.create(res.body.state_wise["Tamil Nadu"]);
		// Delhi = await statedata.Delhi.create(res.body.state_wise.Delhi);
		// Kerala = await statedata.Kerala.create(res.body.state_wise.Kerala);
		// Uttar_Pradesh = await statedata.Uttar_Pradesh.create(res.body.state_wise["Uttar Pradesh"]);
		// Andhra_Pradesh = await statedata.Andhra_Pradesh.create(res.body.state_wise["Andhra Pradesh"]);
		// Rajasthan = await statedata.Rajasthan.create(res.body.state_wise.Rajasthan);
		// Telangana = await statedata.Telangana.create(res.body.state_wise.Telangana);
		// Karnataka = await statedata.Karnataka.create(res.body.state_wise.Karnataka);
		// Madhya_Pradesh = await statedata.Madhya_Pradesh.create(res.body.state_wise["Madhya Pradesh"]);
		// Gujarat = await statedata.Gujarat.create(res.body.state_wise.Gujarat);
		// Jammu_Kashmir = await statedata.Jammu_Kashmir.create(res.body.state_wise["Jammu and  Kashmir"]);
		// Haryana = await statedata.Haryana.create(res.body.state_wise.Haryana);
		// West_Bengal = await statedata.West_Bengal.create(res.body.state_wise["West Bengal"]);
		// Punjab = await statedata.Punjab.create(res.body.state_wise.Punjab);
		// Bihar = await statedata.Bihar.create(res.body.state_wise.Bihar);
		// Chandigarh = await statedata.Chandigarh.create(res.body.state_wise.Chandigarh);
		// Assam = await statedata.Assam.create(res.body.state_wise.Assam);
		// Ladakh = await statedata.Ladakh.create(res.body.state_wise.Ladakh);
		// Andaman_Nicobar = await statedata.Andaman_Nicobar.create(res.body.state_wise["Andaman and Nicobar Islands"]);
		// Uttarakhand = await statedata.Uttarakhand.create(res.body.state_wise.Uttarakhand);
		// Chhattisgarh = await statedata.Chhattisgarh.create(res.body.state_wise.Chhattisgarh);
		// Goa = await statedata.Goa.create(res.body.state_wise.Goa);
		// Himachal_Pradesh = await statedata.Himachal_Pradesh.create(res.body.state_wise["Himachal Pradesh"]);
		// Odisha = await statedata.Odisha.create(res.body.state_wise.Odisha);
		// Puducherry = await statedata.Puducherry.create(res.body.state_wise.Puducherry);
		// Jharkhand = await statedata.Jharkhand.create(res.body.state_wise.Jharkhand);
		// Manipur = await statedata.Manipur.create(res.body.state_wise.Manipur);
		// Mizoram = await statedata.Mizoram.create(res.body.state_wise.Mizoram);
		// Arunachal_Pradesh = await statedata.Arunachal_Pradesh.create(res.body.state_wise["Arunachal Pradesh"]);
		// Dadra_Nagar_Haveli = await statedata.Dadra_Nagar_Haveli.create(res.body.state_wise["Dadra and Nagar Haveli"]);
		// Daman_Diu = await statedata.Daman_Diu.create(res.body.state_wise["Daman and Diu"]);
		// Lakshadweep = await statedata.Lakshadweep.create(res.body.state_wise.Lakshadweep);
		// Meghalaya = await statedata.Meghalaya.create(res.body.state_wise.Meghalaya);
		// Nagaland = await statedata.Nagaland.create(res.body.state_wise.Nagaland);
		// Sikkim = await statedata.Sikkim.create(res.body.state_wise.Sikkim);
		// Tripura = await statedata.Tripura.create(res.body.state_wise.Tripura);