const mongoose = require("mongoose");

var ansSet = mongoose.Schema({
  // date: new Date,
  name: {
    type: String,
    required: true,
  },
  ans1: {
    type: String,
    required: true,
  },
  ans2:{
    type: []
  }
});

module.exports = ();
