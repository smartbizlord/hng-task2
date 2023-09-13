const httpStatus = require('http-status');
const Asyncly = require('../utils/Asyncly');
const service = require('../services');
const pick = require('../utils/pick');
const ApiError = require("../utils/ApiError");



const createPerson = Asyncly(async (req, res) => {
  const person = await service.createPerson(req.body)

  res.status(httpStatus.CREATED).send({ id: person.id, name: person.name});
});

const getSinglePerson = Asyncly(async (req, res) => {
  const person = await service.getPersonByEmail(req.params.id, ["name"]) || await service.getPersonById(req.params.id, ["name"]);

  if (!person) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Person was not found')
  }
  
  res.status(httpStatus.OK).send(person);
});

const getAllPersons = Asyncly(async (req, res) => {
  const page = pick(req.query, ['page']) || 1;
  const limit = pick(req.query, ['limit']) || 50;
  
  const result = await service.queryPersons( limit.limit, page.page, undefined, ["name"]);
  res.status(httpStatus.OK).send(result)
})

const updatePerson = Asyncly(async (req, res) => {
    const person = await service.updateUserById(req.params.id, req.body, ['createdAt', 'updatedAt', '__v'])
  
    res.status(httpStatus.OK).send({person});
});

const deletePerson = Asyncly(async (req, res) => {
    const person = await service.deletePersonById(req.params.id, ['createdAt', 'updatedAt', '__v'])
  
    res.status(httpStatus.OK).send({person});
});


module.exports = {
  createPerson,
  getSinglePerson,
  getAllPersons,
  updatePerson,
  deletePerson,
};
