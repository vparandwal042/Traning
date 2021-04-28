const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'./public')));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'./public/form.html'));
});

app.post('/', function(req, res){
    req.body.reverse = req.body.str.split("").reverse().join("");
    console.log(req.body.reverse);
    res.send(req.body.reverse);
});

app.listen(3000);