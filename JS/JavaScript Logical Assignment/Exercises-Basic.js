console.log('Exercises-Basic')

//1
console.log('E1')
const num = 6;
if(num % 2 == 0)
    console.log('Even')
else
    console.log('Odd')

//2
console.log('E2')
function max(x, y, z) 
{
    max_val = 0;
    if (x > y)
        max_val = x;
    else
        max_val = y;
    if (z > max_val) 
        max_val = z;
    
    return max_val;
}
console.log(max(1, 2, 3));
console.log(max(1, 3, 2));
console.log(max(3, 2, 1));

//3
console.log('E3')
function flipCoin(num){
    countH = 0, countT = 0
    for(i = 0;i < 10;i ++)
    {
        x = (Math.floor(Math.random() * 2) == 0);
        if(x)
            countH ++
        else
            countT ++
    }
    return countH
}
console.log(flipCoin(10))
console.log(flipCoin(10))
console.log(flipCoin(10))

//4
console.log('E4')
console.log(flipCoin(10)/10)
console.log(flipCoin(10)/10)
console.log(flipCoin(10)/10)

//5
console.log('E5')
function padChars(number, c){
    var str = ""
    while(number > 0){
        str += c
        number --
    }
    console.log(str)
}
padChars(5, 'x')
padChars(7, '-')

//E6
console.log('E6')
function rollDice(){
    return 1 + Math.floor(Math.random() * 6)
}

function numRollstoGetSix(){
    countSix = 0
    while(true){
        countSix ++
        if(rollDice() == 6)
            break
    }
    return countSix
}

console.log(numRollstoGetSix())
console.log(numRollstoGetSix())

//7
function Random(){
    x = (Math.floor(Math.random() * 2) == 0)
    if(x)
        document.getElementById('E7').innerHTML = "Have a Good Day!"
    else
        document.getElementById('E7').innerHTML = "Have a Bad Day!"
}