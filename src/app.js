const express = require('express');

const bodyParser = require('body-parser');
const config = require('./config/config');
const errorHandler = require('./errors/errorHandler');
const notFoundHandler = require('./errors/notFoundHandler');
const corsMiddleware = require('./middlewares/cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(corsMiddleware);

const usersRoutes = require('./routes/users');

app.use('/api/users', usersRoutes);

// Error Handling
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(config.server.port, function(){
    console.log('API conectada');
});