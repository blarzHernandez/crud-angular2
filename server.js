var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();


var hostname = 'localhost';
var port = 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.get('/', function(req, res, next){
  res.sendFile(express.static(path.join(__dirname,'index.html')));
});


app.listen(port, hostname,function(){
console.log(`Server running at http://${hostname}:${port}`);
});
