/* eslint-disable camelcase */
const Joi = require("joi");

const { joiPasswordExtendCore } = require("joi-password");

const joiPassword = Joi.extend(joiPasswordExtendCore);

const userSchema = Joi.object({
  firstname: Joi.string().min(1).max(50).required(),
  lastname: Joi.string().min(1).max(50).required(),
  email: Joi.string().email().required(),
  password: joiPassword
    .string()
    .minOfSpecialCharacters(2)
    .minOfLowercase(2)
    .minOfUppercase(2)
    .minOfNumeric(2)
    .noWhiteSpaces()
    .onlyLatinCharacters()
    .required(),
  role: Joi.object()
    .pattern(/./, Joi.string().valid("user", "admin"))
    .required(),
});

const smartphoneSchema = Joi.object({
  model: Joi.string().min(1).max(25).required(),
  os: Joi.string().min(1).max(10).required(),
  ram_memory: Joi.number().required(),
  storage: Joi.number().required(),
  screen_size: Joi.number().required(),
  network: Joi.string().min(1).max(2).required(),
  charger: Joi.boolean().truthy(1).falsy(0).required(),
});

const validateUser = (req, res, next) => {
  const { firstname, lastname, email, password, role } = req.body;

  const { error } = userSchema.validate(
    { firstname, lastname, email, password, role },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

const validateSmartphone = (req, res, next) => {
  const { model, os, ram_memory, storage, screen_size, network, charger } =
    req.body;

  const { error } = smartphoneSchema.validate(
    { model, os, ram_memory, storage, screen_size, network, charger },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  validateUser,
  validateSmartphone,
};
