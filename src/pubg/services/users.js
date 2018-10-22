const repo = require('../repositories/users');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

module.exports.userDetails = async (id) => {
    const user = await repo.getById(id);
    const source = user._source;
    return source;
}

module.exports.userUpdate = async (id, data) => {
    const user = await repo.getById(id);

    user._source.email = "diogomainardes@gmail.com";
    user._source.password = "123";

    const updated = await repo.updateUser(user);
    return updated;
}

module.exports.userInsert = async (user) => {

    return await repo.insert(user);

}

module.exports.userLogin = async (username, pass) => {

    const verify = await repo.login(username, pass);

    if (verify && verify.email) {

        // caso a senha do usuário seja encontrada.... iremos criar um token:
        let token = jwt.sign({id: verify.id, email: verify.email}, config.secretKey, {});

        //Aqui iremos retornar a informação do token via JSON:
        return {
            success: true,
            message: 'Token criado!!!',
            toke: token
        };

    } else {
        return {
            message: "Usuário inválido"
        };
    }

    return ;

}

