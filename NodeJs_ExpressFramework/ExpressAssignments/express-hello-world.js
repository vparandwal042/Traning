var express = require('express');
const moment = require('moment');
let now = moment();
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/time', function(req, res) {
    res.send(now.format());
});

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});