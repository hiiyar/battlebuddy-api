const elastic = require('elasticsearch')

const client = new elastic.Client({
    host: process.env.ELASTIC_HOST || 'http://localhost:9200',
    log: process.env.LOGGING || 'error',
  });

module.exports = client;