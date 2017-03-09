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
    // this.nome.value= "";
    // this.cognome.value= "";
    // this.sesso.value="";
    // this.eta.value="";
    // oppure
    this.reset();//pulisce la form dopo aver premuto il tasto
    disegnaTab();

  });

  function disegnaTab(){
    var str = "";
    Users.getUsers().then(function(Users){
      for(let i=0; i<Users.length;i++)
      {
        str += "<tr>"+
               "<td><button idutente='" + Users[i]._id+ "' class=' btn btn-primary glyphicon glyphicon-pencil modifica'></button></td>"+
               "<td>" + Users[i].nome + "</td>"+
               "<td>" + Users[i].cognome + "</td>"+
               "<td>" + Users[i].sesso + "</td>"+
               "<td>" + Users[i].eta + "</td>"+
               "<td><button idutente='" + Users[i]._id+ "' class=' btn btn-primary glyphicon glyphicon-trash elimina'></button></td>"+
               "</tr>";
      }
      $('#tbody').html(str);
      $('.elimina').click(function(){
        var id = $(this).attr("idutente");
        elimina(id);
      })
      $('.modifica').click(function(){
        var id = $(this).attr("idutente");
        modifica(id);
        $('#tabella').addClass('hidden');
        $('#aggiorna').removeClass('hidden');

      })
    }).catch();

  }

  function elimina(id){
    Users.deleteUser(id).then(function(){
      disegnaTab();
    }).catch(function(err){
      console.log(err);
    });
  }
  $('#nuovo').click(function(){
    $('#miaform').removeClass('hidden');
    $('#tabella').hide();
  });
  disegnaTab();

  function modifica(id){
    Users.getDetail(id).then(function(user){
      console.log(user);
      $('#aggiorna [name= nome]').val(user.nome);
      $('#aggiorna [name= cognome]').val(user.cognome);
      $('#aggiorna [name= sesso]').val(user.sesso);
      $('#aggiorna [name= eta]').val(user.eta);
      $('#aggiorna').removeClass('hidden');
    }).catch(function(err){
      console.log(err);
    });
  };
  disegnaTab();



});
