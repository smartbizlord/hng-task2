const Joi = require("joi");

const createPerson = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const updatePerson = {
    body: Joi.object().keys({
      name: Joi.string(),
    }),
};




module.exports = {
    createPerson,
    updatePerson,
  };
  