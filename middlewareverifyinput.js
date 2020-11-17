const Joi = require("@hapi/joi");

function inputvalidate(data) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(255).required(),
        email: Joi.string().min(3).max(255).required().email(),
        password: Joi.string().min(3).max(255).required(),
        phone: Joi.string().min(9).max(255).required()
    });
    return schema.validate(data);
};
module.exports = {
    inputvalidate,
};