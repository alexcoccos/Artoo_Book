var mongoose = require('mongoose');
var User = require('./users.model.js');

module.exports = (function(){
  //stampa lista utente
  var getUsers = function(req,res){
    User.find().exec().then(function(data){
      res.status(200).json(data);
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
  };
  //elimina utente
  var deleteUsers = function(req,res){
    var id = req.params.id;
    User.findByIdAndRemove(id).exec().then(function(data){
      res.status(200).json(data);
    })
    .catch(function(err){
      res.status(500).send(err);
    });
  };
  //modifica/aggiorna utente
  var updateUsers = function(req,res){
    var id = req.params.id;
    var newData = req.body;
    User.findByIdAndUpdate(id, newData).then(function(data){
      res.status(200).json(data);
    }).catch(function(err){
      res.status(500).send(err);
    });
  };
  //Ricerca per neome e cognome 
  var cercaUser = function(req,res){
    var nome = req.query.nome;
    var cognome = req.query.cognome;
    lista=[];
    User.find(
    {
      $or:[{nome: nome},{cognome: cognome}]
    }).exec().then(function(data){
      res.status(200).json(data);
    }).catch(function(err){
      res.status(500).send(err);
    });
  }





  return{
    getUsers :   getUsers, //variabili pubbliche che si collega alla funzione che sta sopra
    createUsers: createUsers,
    detailUsers: detailUsers,
    deleteUsers: deleteUsers,
    updateUsers: updateUsers,
    cercaUser:   cercaUser

  }

})();
