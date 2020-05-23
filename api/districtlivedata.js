var unirest = require('unirest');
const districtdata = require('../schema/districtdataSchema');

temp = {
   "active": 40,
   "confirmed": 136,
   "deceased": 4,
   "recovered": 92
}

exports.writedata = () => {
   var req = unirest('GET', 'https://api.covid19india.org/state_district_wise.json');
   req.end(async (res) => {
      try {
         const district_data = JSON.parse(res.raw_body);
         await districtdata.district.deleteMany();


         // const temp = Object.keys(district_data['Andaman and Nicobar Islands'].districtData);
         // console.log(temp);

         /////////////////////// Andaman and Nicobar Islands //////////////////////
         let totalDistrict = Object.keys(district_data['Andaman and Nicobar Islands'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Andaman and Nicobar Islands'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Andaman and Nicobar Islands'].districtData[districtName].active,
               confirmed: district_data['Andaman and Nicobar Islands'].districtData[districtName].confirmed,
               deceased: district_data['Andaman and Nicobar Islands'].districtData[districtName].deceased,
               recovered: district_data['Andaman and Nicobar Islands'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Andhra Pradesh //////////////////////
         totalDistrict = Object.keys(district_data['Andhra Pradesh'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Andhra Pradesh'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Andhra Pradesh'].districtData[districtName].active,
               confirmed: district_data['Andhra Pradesh'].districtData[districtName].confirmed,
               deceased: district_data['Andhra Pradesh'].districtData[districtName].deceased,
               recovered: district_data['Andhra Pradesh'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Arunachal Pradesh //////////////////////
         totalDistrict = Object.keys(district_data['Arunachal Pradesh'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Arunachal Pradesh'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Arunachal Pradesh'].districtData[districtName].active,
               confirmed: district_data['Arunachal Pradesh'].districtData[districtName].confirmed,
               deceased: district_data['Arunachal Pradesh'].districtData[districtName].deceased,
               recovered: district_data['Arunachal Pradesh'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }

         /////////////////////// Assam //////////////////////
         totalDistrict = Object.keys(district_data['Assam'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Assam'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Assam'].districtData[districtName].active,
               confirmed: district_data['Assam'].districtData[districtName].confirmed,
               deceased: district_data['Assam'].districtData[districtName].deceased,
               recovered: district_data['Assam'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }

         /////////////////////// Bihar //////////////////////
         totalDistrict = Object.keys(district_data['Bihar'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Bihar'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Bihar'].districtData[districtName].active,
               confirmed: district_data['Bihar'].districtData[districtName].confirmed,
               deceased: district_data['Bihar'].districtData[districtName].deceased,
               recovered: district_data['Bihar'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Chandigarh //////////////////////
         totalDistrict = Object.keys(district_data['Chandigarh'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Chandigarh'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Chandigarh'].districtData[districtName].active,
               confirmed: district_data['Chandigarh'].districtData[districtName].confirmed,
               deceased: district_data['Chandigarh'].districtData[districtName].deceased,
               recovered: district_data['Chandigarh'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }

         /////////////////////// Chhattisgarh //////////////////////
         totalDistrict = Object.keys(district_data['Chhattisgarh'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Chhattisgarh'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Chhattisgarh'].districtData[districtName].active,
               confirmed: district_data['Chhattisgarh'].districtData[districtName].confirmed,
               deceased: district_data['Chhattisgarh'].districtData[districtName].deceased,
               recovered: district_data['Chhattisgarh'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }

         /////////////////////// Delhi //////////////////////
         totalDistrict = Object.keys(district_data['Delhi'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Delhi'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Delhi'].districtData[districtName].active,
               confirmed: district_data['Delhi'].districtData[districtName].confirmed,
               deceased: district_data['Delhi'].districtData[districtName].deceased,
               recovered: district_data['Delhi'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }

         /////////////////////// Dadra and Nagar Haveli and Daman and Diu //////////////////////
         totalDistrict = Object.keys(district_data['Dadra and Nagar Haveli and Daman and Diu'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Dadra and Nagar Haveli and Daman and Diu'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Dadra and Nagar Haveli and Daman and Diu'].districtData[districtName].active,
               confirmed: district_data['Dadra and Nagar Haveli and Daman and Diu'].districtData[districtName].confirmed,
               deceased: district_data['Dadra and Nagar Haveli and Daman and Diu'].districtData[districtName].deceased,
               recovered: district_data['Dadra and Nagar Haveli and Daman and Diu'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }

         /////////////////////// Goa //////////////////////
         totalDistrict = Object.keys(district_data['Goa'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Goa'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Goa'].districtData[districtName].active,
               confirmed: district_data['Goa'].districtData[districtName].confirmed,
               deceased: district_data['Goa'].districtData[districtName].deceased,
               recovered: district_data['Goa'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }

         /////////////////////// Gujarat //////////////////////
         totalDistrict = Object.keys(district_data['Gujarat'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Gujarat'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Gujarat'].districtData[districtName].active,
               confirmed: district_data['Gujarat'].districtData[districtName].confirmed,
               deceased: district_data['Gujarat'].districtData[districtName].deceased,
               recovered: district_data['Gujarat'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }



         /////////////////////// Himachal Pradesh //////////////////////
         totalDistrict = Object.keys(district_data['Himachal Pradesh'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Himachal Pradesh'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Himachal Pradesh'].districtData[districtName].active,
               confirmed: district_data['Himachal Pradesh'].districtData[districtName].confirmed,
               deceased: district_data['Himachal Pradesh'].districtData[districtName].deceased,
               recovered: district_data['Himachal Pradesh'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Haryana //////////////////////
         totalDistrict = Object.keys(district_data['Haryana'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Haryana'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Haryana'].districtData[districtName].active,
               confirmed: district_data['Haryana'].districtData[districtName].confirmed,
               deceased: district_data['Haryana'].districtData[districtName].deceased,
               recovered: district_data['Haryana'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Jharkhand //////////////////////
         totalDistrict = Object.keys(district_data['Jharkhand'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Jharkhand'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Jharkhand'].districtData[districtName].active,
               confirmed: district_data['Jharkhand'].districtData[districtName].confirmed,
               deceased: district_data['Jharkhand'].districtData[districtName].deceased,
               recovered: district_data['Jharkhand'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Jammu and Kashmir //////////////////////
         totalDistrict = Object.keys(district_data['Jammu and Kashmir'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Jammu and Kashmir'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Jammu and Kashmir'].districtData[districtName].active,
               confirmed: district_data['Jammu and Kashmir'].districtData[districtName].confirmed,
               deceased: district_data['Jammu and Kashmir'].districtData[districtName].deceased,
               recovered: district_data['Jammu and Kashmir'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Karnataka //////////////////////
         totalDistrict = Object.keys(district_data['Karnataka'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Karnataka'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Karnataka'].districtData[districtName].active,
               confirmed: district_data['Karnataka'].districtData[districtName].confirmed,
               deceased: district_data['Karnataka'].districtData[districtName].deceased,
               recovered: district_data['Karnataka'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Kerala //////////////////////
         totalDistrict = Object.keys(district_data['Kerala'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Kerala'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Kerala'].districtData[districtName].active,
               confirmed: district_data['Kerala'].districtData[districtName].confirmed,
               deceased: district_data['Kerala'].districtData[districtName].deceased,
               recovered: district_data['Kerala'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Ladakh //////////////////////
         totalDistrict = Object.keys(district_data['Ladakh'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Ladakh'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Ladakh'].districtData[districtName].active,
               confirmed: district_data['Ladakh'].districtData[districtName].confirmed,
               deceased: district_data['Ladakh'].districtData[districtName].deceased,
               recovered: district_data['Ladakh'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Lakshadweep //////////////////////
         totalDistrict = Object.keys(district_data['Lakshadweep'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Lakshadweep'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Lakshadweep'].districtData[districtName].active,
               confirmed: district_data['Lakshadweep'].districtData[districtName].confirmed,
               deceased: district_data['Lakshadweep'].districtData[districtName].deceased,
               recovered: district_data['Lakshadweep'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Maharashtra //////////////////////
         totalDistrict = Object.keys(district_data['Maharashtra'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Maharashtra'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Maharashtra'].districtData[districtName].active,
               confirmed: district_data['Maharashtra'].districtData[districtName].confirmed,
               deceased: district_data['Maharashtra'].districtData[districtName].deceased,
               recovered: district_data['Maharashtra'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Meghalaya //////////////////////
         totalDistrict = Object.keys(district_data['Meghalaya'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Meghalaya'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Meghalaya'].districtData[districtName].active,
               confirmed: district_data['Meghalaya'].districtData[districtName].confirmed,
               deceased: district_data['Meghalaya'].districtData[districtName].deceased,
               recovered: district_data['Meghalaya'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Manipur //////////////////////
         totalDistrict = Object.keys(district_data['Manipur'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Manipur'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Manipur'].districtData[districtName].active,
               confirmed: district_data['Manipur'].districtData[districtName].confirmed,
               deceased: district_data['Manipur'].districtData[districtName].deceased,
               recovered: district_data['Manipur'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Madhya Pradesh //////////////////////
         totalDistrict = Object.keys(district_data['Madhya Pradesh'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Madhya Pradesh'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Madhya Pradesh'].districtData[districtName].active,
               confirmed: district_data['Madhya Pradesh'].districtData[districtName].confirmed,
               deceased: district_data['Madhya Pradesh'].districtData[districtName].deceased,
               recovered: district_data['Madhya Pradesh'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Mizoram //////////////////////
         totalDistrict = Object.keys(district_data['Mizoram'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Mizoram'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Mizoram'].districtData[districtName].active,
               confirmed: district_data['Mizoram'].districtData[districtName].confirmed,
               deceased: district_data['Mizoram'].districtData[districtName].deceased,
               recovered: district_data['Mizoram'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Nagaland //////////////////////
         totalDistrict = Object.keys(district_data['Nagaland'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Nagaland'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Nagaland'].districtData[districtName].active,
               confirmed: district_data['Nagaland'].districtData[districtName].confirmed,
               deceased: district_data['Nagaland'].districtData[districtName].deceased,
               recovered: district_data['Nagaland'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Odisha //////////////////////
         totalDistrict = Object.keys(district_data['Odisha'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Odisha'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Odisha'].districtData[districtName].active,
               confirmed: district_data['Odisha'].districtData[districtName].confirmed,
               deceased: district_data['Odisha'].districtData[districtName].deceased,
               recovered: district_data['Odisha'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Punjab //////////////////////
         totalDistrict = Object.keys(district_data['Punjab'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Punjab'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Punjab'].districtData[districtName].active,
               confirmed: district_data['Punjab'].districtData[districtName].confirmed,
               deceased: district_data['Punjab'].districtData[districtName].deceased,
               recovered: district_data['Punjab'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Puducherry //////////////////////
         totalDistrict = Object.keys(district_data['Puducherry'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Puducherry'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Puducherry'].districtData[districtName].active,
               confirmed: district_data['Puducherry'].districtData[districtName].confirmed,
               deceased: district_data['Puducherry'].districtData[districtName].deceased,
               recovered: district_data['Puducherry'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Rajasthan //////////////////////
         totalDistrict = Object.keys(district_data['Rajasthan'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Rajasthan'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Rajasthan'].districtData[districtName].active,
               confirmed: district_data['Rajasthan'].districtData[districtName].confirmed,
               deceased: district_data['Rajasthan'].districtData[districtName].deceased,
               recovered: district_data['Rajasthan'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Sikkim //////////////////////
         totalDistrict = Object.keys(district_data['Sikkim'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Sikkim'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Sikkim'].districtData[districtName].active,
               confirmed: district_data['Sikkim'].districtData[districtName].confirmed,
               deceased: district_data['Sikkim'].districtData[districtName].deceased,
               recovered: district_data['Sikkim'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Telangana //////////////////////
         totalDistrict = Object.keys(district_data['Telangana'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Telangana'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Telangana'].districtData[districtName].active,
               confirmed: district_data['Telangana'].districtData[districtName].confirmed,
               deceased: district_data['Telangana'].districtData[districtName].deceased,
               recovered: district_data['Telangana'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }


         /////////////////////// Tamil Nadu //////////////////////
         totalDistrict = Object.keys(district_data['Tamil Nadu'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Tamil Nadu'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Tamil Nadu'].districtData[districtName].active,
               confirmed: district_data['Tamil Nadu'].districtData[districtName].confirmed,
               deceased: district_data['Tamil Nadu'].districtData[districtName].deceased,
               recovered: district_data['Tamil Nadu'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }



         /////////////////////// Tripura //////////////////////
         totalDistrict = Object.keys(district_data['Tripura'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Tripura'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Tripura'].districtData[districtName].active,
               confirmed: district_data['Tripura'].districtData[districtName].confirmed,
               deceased: district_data['Tripura'].districtData[districtName].deceased,
               recovered: district_data['Tripura'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }



         /////////////////////// Uttar Pradesh //////////////////////
         totalDistrict = Object.keys(district_data['Uttar Pradesh'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Uttar Pradesh'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Uttar Pradesh'].districtData[districtName].active,
               confirmed: district_data['Uttar Pradesh'].districtData[districtName].confirmed,
               deceased: district_data['Uttar Pradesh'].districtData[districtName].deceased,
               recovered: district_data['Uttar Pradesh'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }



         /////////////////////// Uttarakhand //////////////////////
         totalDistrict = Object.keys(district_data['Uttarakhand'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['Uttarakhand'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['Uttarakhand'].districtData[districtName].active,
               confirmed: district_data['Uttarakhand'].districtData[districtName].confirmed,
               deceased: district_data['Uttarakhand'].districtData[districtName].deceased,
               recovered: district_data['Uttarakhand'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }



         /////////////////////// West Bengal //////////////////////
         totalDistrict = Object.keys(district_data['West Bengal'].districtData).length;

         for (let i = 0; i < totalDistrict; i++) {
            let districtName = Object.keys(district_data['West Bengal'].districtData)[i];
            var object = {
               name: districtName,
               active: district_data['West Bengal'].districtData[districtName].active,
               confirmed: district_data['West Bengal'].districtData[districtName].confirmed,
               deceased: district_data['West Bengal'].districtData[districtName].deceased,
               recovered: district_data['West Bengal'].districtData[districtName].recovered,
            }
            await districtdata.district.insertMany(object);
         }

      } catch (err) {
         throw new Error(err);
      }
   });
}


