const express = require('express');
const validate = require('../utils/validate');
const validation = require('../validation');
const controller = require('../controllers')

const router = express.Router();

router.route('/')
    .post(validate(validation.createPerson), controller.createPerson)
    .get(controller.getAllPersons)

router.route('/:id')
    .get(controller.getSinglePerson)
    .put(validate(validation.updatePerson), controller.updatePerson)
    .delete(controller.deletePerson)


module.exports = router;