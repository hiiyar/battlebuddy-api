const service = require('../services/users');
const joi = require('joi');
const appError = require('../errors/appError');
const postUserValidator = require('../validators/postUser');


//Insert user on database
module.exports.insert = async (req, res, next) => {

    try {

        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        joi.validate(user, postUserValidator, {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true
        }, (err, value) => {

            if (err) {
                res.status(403).json({
                    message: 'Validation error: Fields name, email and password are mandatory',
                    errors: err.details.map(k => {
                        return {
                            message: k.message.replace(/['"]/g, '')
                        }
                    })
                });
            }
        });

        const response = await service.userInsert(user);

        res.json(response);

    } catch (e) {

        next(e);

    }
}

//User login
module.exports.login = async (req, res, next) => {

    try{
        const email = req.body.email;
        const pass = req.body.password;

        const session = await service.userLogin(email, pass);

        res.json(session);

    } catch (err) {
        next(err);
    }
}

//Get User by Id
module.exports.get = async (req, res, next) => {

    try {

        const user = await service.userDetails(req.params.id);

        res.json(user);

    } catch (e) {

        next(e);

    }

}

//Update user
module.exports.update = async (req, res, next) => {

    try {

        const response = await service.userUpdate(req.params.id, req.body);

        res.json(response);

    } catch (e) {

        next(e);

    }

}
