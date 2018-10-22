const service = require('../services/users');


module.exports.get = async (req, res) => {

    try {

        console.log(req.params.id);

        const response = await service.userDetails(req.params.id);

        res.json(response);

    } catch (e) {

        res.json(e);

    }

}

module.exports.update = async (req, res) => {

    try {

        const response = await service.userUpdate(req.params.id, {});

        res.json(response);

    } catch (e) {

        res.json(e);

    }

}

module.exports.post = async (req, res) => {
    try {

        let user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const response = await service.userInsert(user);

        res.json(response);

    } catch (e) {

        res.json(e);

    }
}

module.exports.login = async (req, res) => {

    const username = req.body.username;
    const pass = req.body.password;

    const session = await service.userLogin(username, pass);

    res.json(session);

}