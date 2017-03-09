var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

  nome:    {type: String, required:[true,'devi inserire il nome']},
  cognome: {type: String, required:[true,'devi inserire il cognome']/*unique:[true,"cognome gia esistente"]*/},
  sesso:   {type: String, enum:['Male', 'Female']},
  eta:     {type: Number, required: true, min: [16,'devi avere almeno i peli'], max: 99},

});


userSchema.pre('save',function(next){
  this.nome= this.nome.charAt(0).toUpperCase()+
    this.nome.substring(1).toLowerCase();
  this.cognome= this.cognome.charAt(0).toUpperCase()+
    this.cognome.substring(1).toLowerCase();
  next();
})

var User = mongoose.model('User',userSchema);

module.exports = User;
