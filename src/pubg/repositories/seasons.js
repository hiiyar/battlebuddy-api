const elasticSearch = require('../../config/clientElasticSearch');

const indexToSearch = 'pubg-seasons';

module.exports.getById = async (id) => {
    try {
        
        const response = await client.search({
            index: indexToSearch,
            query: {
                term: { id: id }
            }
        });
        
        return response;

    } catch (error) {
        console.trace(error.message)
    }
}