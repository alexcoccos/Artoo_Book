$(document).ready(function(){
  $('#miaform').submit(function(event){
    event.preventDefault();//così non parte subito la chiamata
    //bisogna recuperare tutti i dati inseriti nella form
    var nome = this.nome.value;//uguale a var nome = $('#nome').val();
    var cognome = this.cognome.value;
    var sesso = this.sesso.value;
    var eta = this.eta.value;
    var nuovo = {
      nome:    nome,
      cognome: cognome,
      sesso:   sesso,
      eta:     eta
    }
    Users.creaUtente(nuovo);
  });
});
