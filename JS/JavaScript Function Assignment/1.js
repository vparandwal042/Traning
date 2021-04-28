function square(x){
    return x*x
}
function double(x){
    return x*2
}
function composedValue(){
    document.getElementById('assign1').innerHTML = arguments[0](arguments[1](arguments[2]))  //square(double(x))
}

function Assign1(){
    var x = document.getElementById('input1').value
    composedValue(square, double, x)
}