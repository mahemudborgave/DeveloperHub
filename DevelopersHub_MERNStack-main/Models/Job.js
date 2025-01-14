const mongoose = require('mongoose');

// Create Schema
const JobSchema = new mongoose.Schema({
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'business'
  },
  freelancerprofile:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'FreelancerProfile'
  },
  jobtitle:{
    type: String,
    required: true
  },
  jobdescription:{
    type: String,
    required: true
  },
  skillsetreq: {
    type: [String],
    required: true
  },
  jobbudget:{
    type: Number,
    required: true
  },
  jobduration:{
    type: Number,
    required: true
  },
  interested:[
      {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
          },
          FirstName: {
            type: String
          },
          Email: {
            type: String
          },
          Linkdeln:{
            type: String
          },
          Location: {
            type:String
          },
          Description:{
            type:String
          },
          skills:{
            type:[String]
          }
      }
  ],
  date:{
      type: Date,
      default: Date.now
  }
});

module.exports = Job = mongoose.model('Job', JobSchema);

