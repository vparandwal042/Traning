function square(num){
    return num*num
}
function map(){
    if ( arguments[0].length != 0 ) {
        return [ arguments[1](arguments[0][0]) ].concat(map( arguments[0].slice(1), arguments[1] ))    
    }

}

function advAssign2(){
    document.getElementById('Square-adv').innerHTML = "Square = " +  map([1, 2, 3, 4, 5], square)
    document.getElementById('Squareroot-adv').innerHTML = "Squareroot = " +  map([1, 4, 9, 16, 25], Math.sqrt)
}