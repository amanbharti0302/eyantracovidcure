const worlddata = require('../schema/worlddataSchema');
var unirest = require("unirest");

exports.writedata = function(){

var req = unirest("GET", "https://corona-virus-world-and-india-data.p.rapidapi.com/api");

req.headers({
	"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
	"x-rapidapi-key": "get key from https://corona-virus-world-and-india-data.p.rapidapi.com/api"
});

req.end(async (res) =>{
	try{
		const data = res.body.countries_stat;
		var latestdata = await worlddata.deleteMany();

		var newdata = data.map(async(el)=>{
		    latestdata = await worlddata.create(el);
		});		
	}catch(err){
		throw new Error(err);
	}
});
}