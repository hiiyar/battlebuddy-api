const userModel = require('../models/user');

module.exports.getByPlayerName = async (playerName) => {
    try {

        const response = await userModel.find({
            "integrations.pubg.playerName": "?"+ playerName +"?"
        });

        return response;

    } catch (error) {
        console.trace(error.message)
    }
}

module.exports.getById = async (id) => {
    try {

        const response = await userModel.findOne()

        return response;

    } catch (error) {
        console.log(error.message)
    }
}


module.exports.updateUser = async (data) => {
    try {

        const response = await client.update({
            index: indexToSearch,
            type: '_doc',
            id: data._id,
            body: {
                doc: data._source
            }
        });

        return response;

    } catch (e) {
        return e;
    }
}

module.exports.insert = async (user) => {

    try {

        const newUser = new userModel({
            name: user.name,
            email: user.email,
            password: user.password
        });

        newUser.save();

        return newUser;

    } catch (e) {

        console.log(e);

        return e;
    }
}

module.exports.login = async(email, pass) => {

    const user = await userModel.findOne({
        email: email,
        password: pass
    });

    return user;

}