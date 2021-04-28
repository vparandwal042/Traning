var numbers = [1,2,3,4,5,6,7,8,9];
var target = 100;
var combinations = Math.pow(3,numbers.length-1);

var solutions = [];

var o = { 0 : "", 1 : "-", 2 : "+" };
var i;

for(i = 0; i <= combinations; i++)
{
    var tmp = i.toString(3);

    var p = ("00000000" + tmp).substr(-8,8).split("").map(function(v){ return parseInt(v) });

    var temp = "1" + o[p[0]] + "2" + o[p[1]] + "3" + o[p[2]] + "4" + o[p[3]] + "5" + o[p[4]] + "6" + o[p[5]] + "7" + o[p[6]] + "8" + o[p[7]] + "9";

	if(eval(temp) === 100)
	{
        solutions.push(temp);
    }
}

console.log(solutions);