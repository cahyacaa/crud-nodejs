var mongoose=require('mongoose');
var userschema= new mongoose.Schema({
    name:String, 
    email: String,
    password:String
});
mongoose.model('User', userschema);
module.exports=mongoose.model('User')