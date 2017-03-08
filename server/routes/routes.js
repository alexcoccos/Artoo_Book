module.exports = function(app, express, path){

  //routers
  var users = require('./../Users/index.js');
  app.use('/Users',users);

  //bootstrap
  app.use('/bootstrap',express.static(path.join(__dirname,"..","..","node_modules","bootstrap","dist")));
  //JQUERY
  app.use('/jquery',express.static(path.join(__dirname,"..","..","node_modules","jquery","dist")));

  //js css
  app.use('/js',express.static(path.join(__dirname,"..","..","client","js")));
  app.use('/css',express.static(path.join(__dirname,"..","..","client","css")));
  //serviamo la INDEX
  app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"..","..","client","index.html"));
  });

}
