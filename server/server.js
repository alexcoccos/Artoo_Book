var express = require('express');
var app = express();
var path = require('path');
var app = express();

app.listen(3000,function(err){
  console.log('server connesso alla porta 3000');
});
//bootstrap
app.use('/bootstrap',express.static(path.join(__dirname,"..","node_modules","bootstrap","dist")));
//JQUERY
app.use('/jquery',express.static(path.join(__dirname,"..","node_modules","jquery","dist")));

//serviamo la INDEX
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,"..","client","index.html"));
});
