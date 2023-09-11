const mongoose = require('mongoose');
const {sequelize} = require('../config');

const mongooseInstance = mongoose.connect(sequelize.url);
const dB = {};

mongooseInstance
.then(async() => {
  console.info('Database is good');
})
.catch(err => {
  console.error('Database no dey work', err);
})



dB.mongo = mongooseInstance;

dB.people = mongoose.model('Person', require('./person'));









module.exports = {
  dB
};