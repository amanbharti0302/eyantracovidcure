const mongoose = require('mongoose');

const statedataSchema = new mongoose.Schema({
    active:{
        type:String
    },
    confirmed:{
        type:String
    },
    deaths:{
        type:String
    },
    recovered:{
        type:String
    },
    state:{
        type:String
    }
})


exports.Maharashtra = mongoose.model('Maharashtra', statedataSchema);
exports.Tamil_Nadu = mongoose.model('Tamil_Nadu', statedataSchema);
exports.Delhi = mongoose.model('Delhi', statedataSchema);
exports.Kerala = mongoose.model('Kerala', statedataSchema);
exports.Uttar_Pradesh = mongoose.model('Uttar_Pradesh', statedataSchema);
exports.Andhra_Pradesh = mongoose.model('Andhra_Pradesh', statedataSchema);
exports.Rajasthan = mongoose.model('Rajasthan', statedataSchema);
exports.Telangana = mongoose.model('Telangana', statedataSchema);
exports.Karnataka = mongoose.model('Karnataka', statedataSchema);
exports.Madhya_Pradesh = mongoose.model('Madhya_Pradesh', statedataSchema);
exports.Gujarat = mongoose.model('Gujarat', statedataSchema);
//exports.Jammu_Kashmir = mongoose.model('Jammu_Kashmir', statedataSchema);
exports.Haryana = mongoose.model('Haryana', statedataSchema);
exports.West_Bengal = mongoose.model('West_Bengal', statedataSchema);
exports.Punjab = mongoose.model('Punjab', statedataSchema);
exports.Bihar = mongoose.model('Bihar', statedataSchema);
exports.Chandigarh = mongoose.model('Chandigarh', statedataSchema);
exports.Assam = mongoose.model('Assam', statedataSchema);
exports.Ladakh = mongoose.model('Ladakh', statedataSchema);
exports.Andaman_Nicobar = mongoose.model('Andaman_Nicobar', statedataSchema);
exports.Uttarakhand = mongoose.model('Uttarakhand', statedataSchema);
exports.Chhattisgarh = mongoose.model('Chhattisgarh', statedataSchema);
exports.Goa = mongoose.model('Goa', statedataSchema);
exports.Himachal_Pradesh = mongoose.model('Himachal_Pradesh', statedataSchema);
exports.Odisha = mongoose.model('Odisha', statedataSchema);
exports.Puducherry = mongoose.model('Puducherry', statedataSchema);
exports.Jharkhand = mongoose.model('Jharkhand', statedataSchema);
exports.Manipur = mongoose.model('Manipur', statedataSchema);
exports.Mizoram = mongoose.model('Mizoram', statedataSchema);
exports.Arunachal_Pradesh = mongoose.model('Arunachal_Pradesh', statedataSchema);
exports.Dadra_Nagar_Haveli = mongoose.model('Dadra_Nagar_Haveli', statedataSchema);
exports.Daman_Diu = mongoose.model('Daman_Diu', statedataSchema);
exports.Lakshadweep = mongoose.model('Lakshadweep', statedataSchema);
exports.Meghalaya = mongoose.model('Meghalaya', statedataSchema);
exports.Nagaland = mongoose.model('Nagaland', statedataSchema);
exports.Sikkim = mongoose.model('Sikkim', statedataSchema);
exports.Tripura = mongoose.model('Tripura', statedataSchema);
