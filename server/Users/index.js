var express = require('express');
var router = express.Router();
var Users =  require('./Users.controller.js');

//lista utenti
router.get('/',Users.getUsers);
//crea utente
router.post('/',Users.createUsers);
//dettaglio utente
router.get('/:id',Users.detailUsers);
//elimina utente
router.delete('/:id',Users.deleteUsers);
//modifica/aggiorna utente
router.put('/:id',Users.updateUsers);








//sempre alle fine
module.exports = router;
