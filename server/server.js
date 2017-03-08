var express = require('express');
var app = express();
var path = require('path');
var app = express();


//bootstrap
app.use('/bootstrap',express.static(path.join(__dirname,"..","node_modules","bootstrap","dist")));
//JQUERY
app.use('/jquery',express.static(path.join(__dirname,"..","node_modules","jquery","dist")));

//js css
app.use('/js',express.static(path.join(__dirname,"..","client","js")));
app.use('/css',express.static(path.join(__dirname,"..","client","css")));
//serviamo la INDEX
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,"..","client","index.html"));
});

app.listen(3000,function(err){
  console.log('server connesso alla porta 3000');
});
