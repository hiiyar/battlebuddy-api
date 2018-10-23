const joi = require('joi');

const schema = joi.object().keys({
    name: joi.string().required(),
    email: joi.string().email(),
    password: joi.string().required()
});

module.exports = schema;