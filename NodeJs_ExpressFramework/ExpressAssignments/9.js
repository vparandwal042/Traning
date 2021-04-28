var express = require('express');
var app = express();
var fs = require('fs');
 
app.get('/books-text', function (req, res) {
  var readFile = fs.readFileSync('9.txt', 'utf8');
  var obj = JSON.parse(JSON.stringify(readFile));
  res.json(obj);
});

app.get('/books-json', function (req, res) {
    let rawdata = fs.readFileSync('9.json');
    let student = JSON.parse(rawdata);
    res.json(student);
});
  
app.listen(3000);