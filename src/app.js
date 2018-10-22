const express = require('express');
const app = express();

const context = 'pubg';

const index = require('./'+ context +'/routes/index');
const matches = require('./'+ context +'/routes/matches');
const seasons = require('./'+ context +'/routes/seasons');
const telemetry = require('./'+ context +'/routes/telemetry');
const users = require('./'+ context +'/routes/users');

app.use('/api/users', users);

app.use('/'+ context +'/api', index);
app.use('/'+ context +'/api/matches', matches);
app.use('/'+ context +'/api/seasons', seasons);
app.use('/'+ context +'/api/telemetry', telemetry);

app.listen(5000, function(){
    console.log('API conectada');
});