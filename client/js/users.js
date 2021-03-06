var Users= (function(){

  var creaUtente = function(data){
    //serve per passare i dati dalla form al db
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
  var getUsers = function(){
    return $.ajax({
      url: "http://localhost:3000/Users",
      method: "GET",
      contentType: "application/json",// descrive il contenuto del file
      dataType: "json",//descrive il tipo di file
    });
  }

  var deleteUser = function(id){
    return $.ajax({
      url: "http://localhost:3000/Users/id/"+ id,
      method: "DELETE",
      contentType: "application/json",// descrive il contenuto del file
      dataType: "json",//descrive il tipo di file
    });
  }

  var getDetail = function(id){
    return $.ajax({
      url: "http://localhost:3000/Users/id/"+ id,
      method: "GET",
      contentType: "application/json",// descrive il contenuto del file
      dataType: "json",//descrive il tipo di file
    });
  }

  //sempre alla fine
  return{
    creaUtente: creaUtente,
    getUsers:   getUsers,
    deleteUser: deleteUser,
    getDetail:  getDetail
  }
})();
