const express = require('express');
const person = require('./person')

const router = express.Router();

router.use('/api', person);

module.exports = router;