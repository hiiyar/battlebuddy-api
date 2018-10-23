const repo = require('../repositories/users');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const appError = require('../errors/appError');

module.exports.userInsert = async (user) => {

    const existsEmail = await repo.getUserByEmail(user.email);

    if (existsEmail)
        throw new appError('Email already found on database. Is that yours?', 403);

    return await repo.insert(user);

}


module.exports.userDetails = async (id) => {
    const user = await repo.getById(id);

    if (!user)
        throw new appError('User not found', 404);

    return user;
}


module.exports.userUpdate = async (id, data) => {
    return await repo.updateUser(id, data);
}


module.exports.userLogin = async (email, pass) => {

    const verify = await repo.login(email, pass);

    if (verify && verify.email) {

        // caso a senha do usuário seja encontrada.... iremos criar um token:
        let token = jwt.sign({id: verify.id, email: verify.email}, config.crypto.secretKey, {});

        //Aqui iremos retornar a informação do token via JSON
        return {
            message: 'Usuário autenticado',
            token: token
        };

    } else {

        throw new appError('Usuário inválido', 401);

    }

}

