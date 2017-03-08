var express = require('express');
var app = express();
var path = require('path');
var app = express();

app.listen(3000,function(err){
  console.log('server connesso alla porta 3000');
});


//serviamo la INDEX
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,"..","client","index.html"));
});
