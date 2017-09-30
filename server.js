const EXPRESS = require('express');
const PORT = process.env.PORT || 5000;
const PARSE = require('body-parser').urlencoded({extended:true});
const app = EXPRESS();
app.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'});
});
app.use(EXPRESS.static('public'));
app.listen(PORT, function(){
  console.log(`Running on port` + PORT)
});
