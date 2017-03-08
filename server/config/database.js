//connessione al db
module.exports = function(mongoose){

  mongoose.connect('mongodb://rostolo:rostolo@ds123370.mlab.com:23370/artoo_book',function(err){
    if(err)
    {
      console.log('sei le palle');
    }else{
      console.log("connesso a Artoo_Book db");
    }
  });

}
