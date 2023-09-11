const mongoose = require('mongoose');
const validator = require('validator');


module.exports = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    track: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    stage: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    phoneNumber : {
      type : String,
      required : false,
      validate(value) {}
    },
    gender : {
      type : String,
      enum: ['male', 'female'],
      required: true,
    },
  }, { timestamps: true});
