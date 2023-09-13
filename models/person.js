const mongoose = require('mongoose');
const validator = require('validator');


module.exports = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
  }, { timestamps: true});
