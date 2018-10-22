const client = require('../../config/clientElasticSearch');

const indexToSearch = 'pubg';

module.exports.getByPlayerName = async (playerName) => {
    try {

        const response = await client.search({
            index: indexToSearch,
            q: 'integrations.pubg.playerName:'+playerName
        });

        return response;

    } catch (error) {
        console.trace(error.message)
    }
}

module.exports.getById = async (id) => {
    try {

        const response = await client.get({
            index: indexToSearch,
            type: '_doc',
            id: id
        });

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

        const response = await client.create({
            index: indexToSearch,
            type: '_doc',
            body: {
                user
            }
        });

        return response;

    } catch (e) {

        console.log(e);

        return e;
    }
}