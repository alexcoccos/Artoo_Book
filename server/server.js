var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var app = express();
var bodyparser = require('body-parser');

//parser del body
app.use(bodyparser.json());

//connessione al db
require('./config/database.js')(mongoose);

//rotte principale
require('./routes/routes.js')(app, express, path);

//start server
app.listen(3000,function(err){
  console.log('server connesso alla porta 3000');
});
