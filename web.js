var  fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var data = fs.readFileSync('index.html', 'ascii');
  var buffer = new Buffer(data);
  var text = buffer.toString(); 
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
