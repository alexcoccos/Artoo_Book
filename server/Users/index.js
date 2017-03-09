var express = require('express');
var router = express.Router();
var Users =  require('./Users.controller.js');

//lista utenti
router.get('/',Users.getUsers);
//crea utente
router.post('/',Users.createUsers);
//dettaglio utente
router.get('/id/:id',Users.detailUsers);
//elimina utente
router.delete('/id/:id',Users.deleteUsers);
//modifica/aggiorna utente
router.put('/id/:id',Users.updateUsers);
//ricerca per nome o per cognomeù
router.get('/cerca/',Users.cercaUser);








//sempre alle fine
module.exports = router;
