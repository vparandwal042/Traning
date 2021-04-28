//1
const http = require('http');

let app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World in Node Js');
});

console.log('\nAssignment-1');
console.log("Success I'm listening to the port 3000");

//2
const fs = require('fs');

fs.readFile('text.txt', 'utf-8', function(err, data){
    if(err) throw err;
    console.log('\nAssignment-2');
    console.log(data);
});

//3
const folder = '../node_modules/'

fs.readdir(folder, function(err, files){
    console.log('\nAssignment-3');
    files.forEach(file =>{
        console.log(file);
    });
});

//4
let command_text = process.argv[2];

fs.writeFile('4.txt', command_text, function(err){
    if(err) throw err;

    console.log('\nAssignment-4');
    console.log('The file was saved!');
});

//5
let command_text1 = process.argv[3];
let count = 0
fs.readFile('search.txt', 'utf-8', function(err, data){
    if(err) throw err

    count = data.split(command_text1).length - 1;
    console.log('\nAssignment-5');
    console.log("Found:", command_text1, "=", count);
});

//6 in app.js file

//7
console.log('\nAssignment-7');
const time = require('strftime');
console.log(time('%H'), "hours");

//8
let x = 2, y = 5;
let sum = x + y;

fs.writeFile('8.txt', sum.toString(), function(err){
    if(err) throw err;

    console.log('\nAssignment-8');
    console.log('Sum of integers added to the 8.txt file');
});

//9
fs.readFile('9.txt', 'utf-8', function(err, data){
    let data_list = [];
    data_list = data.split(' ');
    console.log('\nAssignment-9');
    console.log(data_list)
});

//10
let text = "Hey yo! let's go in code";

fs.writeFile('10.txt', text, function(err){
    if(err) throw err;

    console.log('\nAssignment-10');
    console.log('The file was saved! 10.txt');
})

const command_text2 = process.argv[4];
let text1 = "Hey yo! let's go";
fs.writeFile(command_text2, text1, function(err){
    if(err) throw err;

    console.log('\nAssignment-10');
    console.log("The file was saved! in user text file");
    console.log(text)
});

//11
fs.readFile(__dirname +'/'+'11.txt', 'utf-8', function(err, data){
    if(err) throw err;

    console.log('\nAssignment-11');
    console.log(data);
});

//12
console.log('\nAssignment-12');
console.log(time('%D, %H:%M:%S'));

//13
let name = process.argv[5];
console.log('\nAssignment-13');
console.log('Hello ',name);

app.listen(3000, '127.0.0.1');