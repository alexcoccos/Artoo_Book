var mongoose = require('mongoose');
var User = require('./users.model.js');

module.exports = (function(){
  //stampa lista utente
  var getUsers = function(req,res){
    User.find().exsex().then(function(data){
      res.send(200).json(data);
    })
    .catch(function(err){
      res.status(500).send(err);
    });
  };
  //crea utente
  var createUsers = function(req,res){
    var Utente = req.body;
    var newUtente = new User(Utente);
    newUtente.save().then(function(data){
      res.send(200).json(data);
    })
    .catch(function(err){
      res.status(500).send(err);
    })
  };
  //dettaglio utente
  var detailUsers = function(req,res){
    var id = req.params.id;
    User.findeById(id).exec().then(function(data){
      res.status(200).json(data);
    })
    .catch(function(err){
      res.stauts(500).send(err);
    })
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
