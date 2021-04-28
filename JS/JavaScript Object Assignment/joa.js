class Rectangle{
    constructor(width, height){
        this.height = height
        this.width = width
    }
}

Rectangle.prototype.getArea = function getArea(){
    return this.height * this.width
}

//1
function first(){
    var obj = new Rectangle(4, 5)
    document.getElementById('o1').innerHTML = "Height = " + obj.height + ", Width = " + obj.width
}

//2
function Area(){
    var obj = new Rectangle(4, 5)
    document.getElementById('o2').innerHTML = "Area of Reactangle = " + obj.getArea()
}

//3
function three(){
    const r = new Rectangle(4, 5)
    r.height = 50
    document.getElementById('o3').innerHTML = "Area of Reactangle with Width : " + r.width + " and Height : " + r.height + " is = " + r.getArea()
}

//4
let NameDetails = {firstName: 'Vishal', lastName: 'P'}
console.log(NameDetails)
NameDetails.lastName = 'Parandwal'
console.log(NameDetails)

//5
NameDetails.middleName = 'Dilip'
console.log(NameDetails)

//6
var string = "{firstName: 'Vishal', lastName: 'Parandwal'}";
eval('var obj = ' + string)
console.log("eval = ", obj)

//7
var str = '{ "fisrtName": "Vishal", "lastName": "Parandwal" }'
var obj1 = JSON.parse(str)
console.log("JSON.parse() = ", obj1)