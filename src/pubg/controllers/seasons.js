const serviceSeason = require('../services/seasons')

module.exports.get = (req, res) => {
    let seasonsResponse = serviceSeason.getAllSeasons();

    res.json(seasonsResponse);
}