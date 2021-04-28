function square(num){
    return num*num
}
function map(){
    array = []
    for(i = 0;i < arguments[0].length;i ++){
        res = arguments[1](arguments[0][i])
        array.push(res)
    }
    return array
}

function Assign4(){
    document.getElementById('Square').innerHTML = "Square = " +  map([1, 2, 3, 4, 5], square)
    document.getElementById('Squareroot').innerHTML = "Squareroot = " +  map([1, 4, 9, 16, 25], Math.sqrt)
}