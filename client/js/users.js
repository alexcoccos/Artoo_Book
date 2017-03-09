var Users= (function(){

  var creaUtente = function(data){
    return $.ajax({
      url : "http://localhost:3000/Users",
      method : "POST",
      contentType: "application/json",// descrive il contenuto del file
      dataType: "json",//descrive il tipo di file
      data : JSON.stringify(data),//trasformiamo il json in stringa
    }).then(function(risp){
      console.log(risp);
    }).catch(function(err){
      console.log(err);
    })
  }
  return{
    creaUtente: creaUtente
  }
})();
