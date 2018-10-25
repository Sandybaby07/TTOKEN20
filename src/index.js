var express = require('express');
 
var app = express();
 
app.use('/', express.static('src'));
 
var port = 3100;
var server = app.listen(port);
console.log('Express app started on port ' + port);
