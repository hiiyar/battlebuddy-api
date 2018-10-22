const axios = require('axios');

module.exports.listAllSeasons = () => {
    return [
        {'id': 1, 'season': 'Season 1'},
        {'id': 2, 'season': 'Season 2'},
        {'id': 3, 'season': 'Season 3'},
        {'id': 4, 'season': 'Season Finalle'},
    ]
}

module.exports.getById = () => {
    return [
        {'id': 1, 'season': 'Season 1'},
        {'id': 2, 'season': 'Season 2'},
        {'id': 3, 'season': 'Season 3'},
        {'id': 4, 'season': 'Season Finalle'},
    ]
}