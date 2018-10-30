var express = require('express');
 
var app = express();
 
app.use('/', express.static('src'));
app.use('/TutorialToken.json', express.static('build/contracts'))
 
var port = process.env.PORT || 1337;
var server = app.listen(port);
console.log('Express app started on port ' + port);
