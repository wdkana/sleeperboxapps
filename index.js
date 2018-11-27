const express = require('express'),
app = express(),
port = process.env.PORT || 3000,
bodyParser = require('body-parser'),
controller = require('./controller/main');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const routes = require('./routes/main');
routes(app);

app.listen(port);
console.log('server running ...', + port);
