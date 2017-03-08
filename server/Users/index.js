var express = require('express');
var router = express.Router();
var Users =  require('./Users.controller.js');

//lista Utenti
router.get('/',function(req,res){
  res.send('utenti');
});

router.get('/',Users.getUsers);









//sempre alle fine
module.exports = router;
