const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    FirstName:{
        type: String,
        required:true
    },
    LastName:{
        type: String,
        required:true
    },
    UserName:{
        type: String,
        required:true
    },
    Email:{
        type: String,
        required:true,
        unique: true
    },
    Password:{
        type: String,
        required:true
    },
    Linkdeln:{
        type: String,
        required:true
    },
    Location:{
        type: String,
        required:true
    },
    Age:{
        type: Number,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    icon:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
    //remember to add resume and portfolio
});

module.exports = User = mongoose.model('user', UserSchema);