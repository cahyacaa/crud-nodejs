//main app  
var express=require('express');
var app =express();
var db=require('./db');//konek to mongodb
var usercontroller= require('./user/usercontroller');

app.use('/users', usercontroller);

module.exports=app;