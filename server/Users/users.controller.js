module.exports = (function(){
  var getUsers = function(req,res){
    res.send('Lista Utenti');
  };
  return{
    getUsers : getUsers

  }

})();
