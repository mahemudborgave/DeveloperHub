const mongoose = require('mongoose');

// Create Schema
const BusinessProfile = new mongoose.Schema({
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'business'
  },
  website: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  employeecount:{
    type: Number
  },
  established:{
    type: Number,
    required: true
  },
  clients: {
    type: [String],
    required: true
  },
  companycategory: {
    type: String,
    required: true
  }
});

module.exports = businessprofile = mongoose.model('BusinessProfile', BusinessProfile);