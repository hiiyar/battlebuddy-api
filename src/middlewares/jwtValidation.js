const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports.jwtValidation = (req, res, next) => {

    console.log(req.headers);
    var token = req.body.token || req.query.token || req.headers['authorization'];

    if(token) {
        jwt.verify(token, config.secretKey, function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Falha ao tentar autenticar o token!' });
            } else {
                //se tudo correr bem, salver a requisição para o uso em outras rotas
                req.decoded = decoded;
                next();
            }
        });

    } else {
        // se não tiver o token, retornar o erro 403
        return res.status(403).send({
            success: false,
            message: 'Não há token.'
        });
    }
}