const Joi = require("joi");

const createPerson = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    track: Joi.string().required(),
    stage: Joi.string().required(),
    gender: Joi.string().required().valid('male', 'female'),
    phoneNumber: Joi.string().replace("+", ""),
  }),
};

const updatePerson = {
    body: Joi.object().keys({
      firstName: Joi.string(),
      lastName: Joi.string(),
      track: Joi.string(),
      stage: Joi.string(),
      gender: Joi.string().valid('male', 'female'),
      phoneNumber: Joi.string().replace("+", ""),
    }),
};




module.exports = {
    createPerson,
    updatePerson,
  };
  