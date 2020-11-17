var apl=require('./app');
var port = process.env.PORT || 3000;

apl.listen(port, ()=> {
  console.log('Express Listen on Port ' + port);
});