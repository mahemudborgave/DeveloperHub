const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
    CompanyName:{
        type: String,
        required:true
    },
    ContactName:{
        type: String,
        required:true
    },
    ContactEmail:{
        type: String,
        required:true,
        unique: true
    },
    Password:{
        type: String,
        required:true
    },
    Location:{
        type: String,
        required:true
    },
    CompanyDescription:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Business = mongoose.model('business', BusinessSchema);