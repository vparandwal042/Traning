//1
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World in Express');
});

//2
app.get('/year', function(req, res){
    res.send('You were born in: ' + (2021-parseInt(req.query.age)).toString());
});
  
app.listen(port, () => {
    console.log(`Express listening at http://localhost:${port}`)
});

//3
const arg_port = process.argv[2];
app.get('/home', (req, res) => {
    res.send('Hello World');
});
app.listen(arg_port);