function func(){
    return function(input3){
        return input3
    }
}
var anonymous = func()
function advAssign3(){
    var input3 = document.getElementById('input3').value
    document.getElementById('anonymous').innerHTML = anonymous(input3)
}