const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');

const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.set('secret', config.secretKey);

const index = require('./routes/index');
const users = require('./routes/users');

app.use('/api', index);
app.use('/api/users', users);

app.listen(5000, function(){
    console.log('API conectada');
});