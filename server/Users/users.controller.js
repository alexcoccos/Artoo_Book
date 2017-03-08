module.exports = (function(){
  //stampa lista utente
  var getUsers = function(req,res){
    res.send('Lista Utenti');
  };
  //crea utente
  var createUsers = function(req,res){
    res.send('creazione utente');
  };
  //dettaglio utente
  var detailUsers = function(req,res){
    var id = req.params.id;
    res.send('dettaglio utente');
  }
  //elimina utente
  var deleteUsers = function(req,res){
    var id = req.params.id;
    res.send('utente eliminato');
  }
  //modifica/aggiorna utente
  var updateUsers = function(req,res){
    var id = req.params.id;
    res.send('aggiornamento riuscito');
  }


  return{
    getUsers : getUsers, //variabili pubbliche che si collega alla funzione che sta sopra
    createUsers: createUsers,
    detailUsers: detailUsers,
    deleteUsers: deleteUsers,
    updateUsers: updateUsers

  }

})();
