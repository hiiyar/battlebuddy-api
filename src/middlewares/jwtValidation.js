const jwt = require('jsonwebtoken');
const config = require('../config/config');
const appError = require('../errors/appError');

module.exports.jwtValidation = (req, res, next) => {

    var token = req.body.token || req.query.token || req.headers['authorization'];

    if(token) {
        jwt.verify(token, config.crypto.secretKey, function(err, decoded) {
            if (err) {
                throw new appError('Invalid token', 401);
            } else {
                //se tudo correr bem, salver a requisição para o uso em outras rotas
                req.decoded = decoded;
                next();
            }
        });

    } else {
        // se não tiver o token, retornar o erro 403
        throw new appError('Token not found', 401);
    }
}